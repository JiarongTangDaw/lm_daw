# Documetación de errores

1. ¿Qué ha ocurrido?
2. ¿Cómo se puede reproducir?
3. ¿En qué entorno ha ocurrido?
4. ¿Qué esperabamos que ocurriera?
5. Evidencias

## Formulario vacio [Permite envio de formulario sin datos]
 Descripción: En formulario se envia aunque todos los campos esten vacios
 Pasos para reproducirlo:
  - Click sobre registrarse

  Resultado esperado:
    Salte un error de que debe rellenar los campos para producirse el registro
  Resultado real:
    El registro se ejectua con los campos vaios
  Evidencias o código donde ocurre el error:
  c:\Users\Alumno\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{8F66EF81-F0FC-4157-8732-D4E4FE19CE78}.png


## Numero y caracteres especiales [El campo nombre acepta numero y caracteres especiales]
 Descripción: En el campo nombre se acepta tanto numeros como caracteres especiales
 Pasos para reproducirlo:
  - En el campo nombre escribir cualquier caracter que no sea una letra
  - Click sobre registrar

  Resultado esperado:
    Salte un error informando que no se permite numeros y caracteres en el campo nombre
  Resultado real:
    El formulario se envia correctamente con el valor introducido
  Evidencias o código donde ocurre el error:
  c:\Users\Alumno\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{895801E4-8D7B-4E86-AF91-4F81AC311F38}.png


## Formulario incompleto [Se efecuta el registro aunque el formulario es incompleto]
 Descripción: Si no se rellena todos los campos el registro se efectua de igual forma
 Pasos para reproducirlo:
  - Rellenar algunos campos del formulario
  - Click sobre registrarse

  Resultado esperado:
    Se espera que salte un error comentando que no se puede realizar el registro porque no esta todos los campos completados
  Resultado real:
    Se efectua correctamente el registro aunque los campos no esten todos rellenos
  Evidencias o código donde ocurre el error:
  c:\Users\Alumno\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{76031871-ED53-4E22-9A89-0B3E04FF84A5}.png


## Correo incorrecto [Correo con formato incorrecto]
 Descripción: Al escribir el correo en un formato incorrecto, se registra de forma correcta el usuario
 Pasos para reproducirlo:
  - Relleno del campo nombre correctamente
  - Relleno del campo de correo con un formato equivocado
  - Click sobre registrarse

  Resultado esperado:
    Se espera que salte un error informando de que la estructura del correo es incorrecto
  Resultado real:
    El registro se efectua de forma correcta
  Evidencias o código donde ocurre el error:
  c:\Users\Alumno\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{4824F700-9CB8-4FEE-9213-029A748B093E}.png


## Confirmacion incorrecto [Contraseña de confirmacion diferente a contraseña]
 Descripción: Al rellenar el campo de contraseña con un valor y el campo de confirmar contraseña con otro valor, el registro se efectua de forma correcta
 Pasos para reproducirlo:
  - Rellenar el campo contraseña con un valor
  - Rellenar el campo confirmar contraseña con otro valor
  - Click sobre registrarse

  Resultado esperado:
    Se espera que salte un error de que el valor del campo confirmacion contraseña es diferente al valor del campo contraseña
  Resultado real:
    No salta ningun error, se efectua el registro correctamente
  Evidencias o código donde ocurre el error:
  c:\Users\Alumno\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{69DE4D46-A504-49E6-B879-F9F69EC9D5C1}.png


## Edad negativo [El valor de edad es negativo]
 Descripción: Al escribir un valor negativo en el campo de edad, el registro se realiza de forma correcta
 Pasos para reproducirlo:
  - Escribir un valor negativo en el campo edad
  - Click sobre registrarse

  Resultado esperado:
    Se espera que salte un error que informe que no se permite valores negativos en el campo de edad
  Resultado real:
    No salta ningun error, se efecuta el registro con normalidad
  Evidencias o código donde ocurre el error:
  c:\Users\Alumno\AppData\Local\Packages\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\TempState\ScreenClip\{6A4763B9-298B-4F21-8EF8-2064C2757A3B}.png


## Sin aceptar terminos [Descripción breve del problema]
 Descripción: Explicar en que consite el error
 Pasos para reproducirlo:
  - uno
  - dos
  - tres

  Resultado esperado:

  Resultado real:

  Evidencias o código donde ocurre el error:
  ```
  ```


## No realiza ninguna funcion [Descripción breve del problema]
 Descripción: Explicar en que consite el error
 Pasos para reproducirlo:
  - uno
  - dos
  - tres

  Resultado esperado:

  Resultado real:

  Evidencias o código donde ocurre el error:
  ```
  ```


## Titulo [Descripción breve del problema]
 Descripción: Explicar en que consite el error
 Pasos para reproducirlo:
  - uno
  - dos
  - tres

  Resultado esperado:

  Resultado real:

  Evidencias o código donde ocurre el error:
  ```
  ```