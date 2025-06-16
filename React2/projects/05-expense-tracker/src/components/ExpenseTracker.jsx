import { useEffect, useState } from 'react';
import './ExpenseTracker.css'

function ExpenseTracker() {
    //Estados para los campos del formulario
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('comida');

    // Estaado para la lista de gastos
    const [expenses, setExpenses] = useState([]);

    useEffect(() =>{
        console.log("El componente ExpenseTracker se ha renderizado");
        
        const saveExpenses = localStorage.getItem('expenses')

        //Intentar cargar gastos guardados
        if(saveExpenses){
            try{
                const parsedExpenses = JSON.parse(saveExpenses);

                console.log("Gastos cargados: ",parsedExpenses);
                

                setExpenses(parsedExpenses);
            }catch(error){
                console.log("Error al cargar los gastos: ", error);
                
            }
        }
    }, []);
    // array vacio = solo se ejecuta una vez
    // (si estuviera el componente en un componente padre y ese se modifica esto se volvera a ejecutar)

    useEffect(() =>{
        console.log("Los gastos han cambiado: ",expenses);
        
        if(expenses.length > 0){
            console.log("Guardando gastos en localStorage....");
            
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }
    },[expenses]);
    // se ejecuta cada vez que expenses cambia

    const clearAllExpenses = () => {
        const confimation = window.confirm("¿Estas segur@ de que quieres borrar todos los gastos?")

        if(confimation){
            setExpenses([]);
            localStorage.removeItem('expenses');
        }
    }

    const handleChangeDescription = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setDescription(valor);
    }
    const handleChangeAmount = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setAmount(valor);
    }
    const handleChangeCategory = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setCategory(valor);
    }

    const cleanForm = () => {
        setDescription('');
        setAmount('');
        setCategory('comida');
    }

    const handleSubmit = (event) => {
        //para la ejecucion del sumit
        event.preventDefault();

        //Validaciones basicas de los campos
        if(!description.trim()){
            alert("Por favor, añade una descripcion");
            return ;
        }
        
        if(!amount || amount <= 0){
            alert("Por favor, añade una cantidad valida");
            return ;
        }

        // crear un nuevo gasto
        const newExpense = {
            id: Date.now(),
            description: description.trim(),
            amount: parseFloat(amount),
            category: category,
            date: new Date().toLocaleDateString('es-Es'),
            time: new Date().toLocaleTimeString('es-Es',{hour: '2-digit', minute: '2-digit'})
        }

        setExpenses(prevExpenses => [newExpense, ...prevExpenses])

        cleanForm();
    }

    const totalExpenses = expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
    const expensesCount = expenses.length;
    
    const expensesByCategory = expenses.reduce((acc, expenses) => {
        acc[expenses.category] = (acc[expenses.category] || 0) + expenses.amount;
        return acc;
    }, {})

    return (
        <div className="expense-tracker">
            <header className="et-header">
                <h1>Control de gastos</h1>
            </header>

            <section className='et-dashboard'>
                <h2>🗒️ Resumen</h2>
                <div className='et-stats-grid'>
                    <div className='et-stat-card'>
                        <div className='et-stat-icon'>
                            💰
                        </div>
                        <div className='et-stat-info'>
                            <h3>Total gastado</h3>
                            <p className='et-stat-value'>{totalExpenses.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='et-stat-card'>
                        <div className='et-stat-icon'>
                            🧮
                        </div>
                        <div className='et-stat-info'>
                            <h3>Numero de gastos</h3>
                            <p className='et-stat-value'>{expensesCount}</p>
                        </div>
                    </div>
                    <div className='et-stat-card'>
                        <div className='et-stat-icon'>
                            ⚖️
                        </div>
                        <div className='et-stat-info'>
                            <h3>Promedio por Gasto</h3>
                            <p className='et-stat-value'>{expensesCount > 0 ? (totalExpenses / expensesCount).toFixed(2) : '0.00'}€</p>
                        </div>
                    </div>
                </div>

                {
                    Object.keys(expensesByCategory).length > 0 && (
                        <div className='et-category-breakdown'>
                            <h3>Gastos por Categoria</h3>
                            <div className='et-category-list'>
                                {
                                    Object.entries(expensesByCategory).map(([category, amount]) => (
                                        <div key={category} className='et-category-item'>
                                            <span  className='et-category-name'>
                                                {category ==='comida' && '🍕 Comida'}
                                                {category ==='transporte' && '🚌 Transporte'}
                                                {category ==='entretenimiento' && '🕹️ Entretenimiento'}
                                                {category ==='salud' && '🏥 Salus'}
                                                {category ==='otros' && '📦 Otros'}
                                            </span>
                                            <span className='et-category-amount'>
                                                {amount.toFixed(2)}€
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </section>

            <main className="et-main-content">
                <section className="et-form-section">
                    <h2>Añadir gasto</h2>
                    {/* Aqui ira nuestro formulario */}
                    <form className='et-expense-form' onSubmit={(event) => handleSubmit(event)}>
                        <div className='et-form-group'>
                            <label htmlFor="description">Descripcion:</label>
                            <input 
                                id='description'
                                type='text'
                                placeholder='¿En que has gastado?'
                                value={description}
                                className='et-form-input'
                                onChange={(event) => handleChangeDescription(event)}
                            />
                        </div>
                        <div className='et-form-group'>
                            <label htmlFor="amount">Cantidad (€):</label>
                            <input 
                                id='amount'
                                type='number'
                                step='0.01'
                                placeholder='0.00'
                                value={amount}
                                className='et-form-input'
                                onChange={(event) => handleChangeAmount(event)}
                            />
                        </div>
                        <div className='et-form-group'>
                            <label htmlFor="category">Categoria:</label>
                            <select 
                                id="category"
                                className='et-form-select'
                                value={category}
                                onChange={(event) => handleChangeCategory(event)}
                            >
                                <option value="comida">🍕 Comida</option>
                                <option value="transporte">🚌 Transporte</option>
                                <option value="entretenimiento">🕹️ Entretenimiento</option>
                                <option value="salud">🏥 Salud</option>
                                <option value="otros">📦 Otros</option>
                            </select>
                        </div>

                        <button type='submit' className='et-submit-btn'>Añadir Gasto</button>
                    </form>
                </section>

                <section className="et-list-section">
                    <h2>Lista Gastos</h2>
                    {/* Aqui ira nuestra lista */}

                    {
                        expenses.length === 0?(
                            <div className='et-no-expenses'>
                                <p>No hay gastos registrados</p>
                                <p>Usa el formulario de arriba para empezar</p>
                            </div>
                            
                        )
                        :
                        (
                            <div className='et-expenses-list'>
                                {
                                    expenses.map(expense => (
                                        <div className='et-expense-item' key={expense.id}>
                                            <div className='et-expense-info'>
                                                <div className='et-expense-category'>
                                                    {expense.category ==='comida' && '🍕'}
                                                    {expense.category ==='transporte' && '🚌'}
                                                    {expense.category ==='entretenimiento' && '🕹️'}
                                                    {expense.category ==='salud' && '🏥'}
                                                    {expense.category ==='otros' && '📦'}
                                                </div>
                                                <div className='et-expense-details'>
                                                    <h3 className='et-expense-description'>{expense.description}</h3>
                                                    <p className='et-expense-datetime'>{expense.date} a las {expense.time}</p>
                                                </div>
                                            </div>
                                            <div className='et-expense-amount'>
                                                {expense.amount.toFixed(2)}€
                                            </div>
                                        </div>
                                    ))
                                }
                                <button type='button' className='et-clear-btn' onClick={clearAllExpenses}>Limpiar todo</button>
                            </div>
                        )
                    }
                    {/* <p>Total gastos: {expenses.length}</p> */}
                </section>
            </main>
        </div>
    )
}

export default ExpenseTracker;