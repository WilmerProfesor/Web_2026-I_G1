# Web_2026-I_G1

Instalación de bootstrap

1. Ir al site oficial
https://getbootstrap.com/

2. Ir a la opción descargar

3. descomprimir el zip descargado

4. crear en el proyecto dos carpetas "js" y "css"

5. en las carpetas copiar los archivos bootstrap.css y bootstrap.js respectivamente

6. ir a la sección docs del sitio oficial y copiar el código a reutilizar 


# REACT

## Instalación

1. Ir al site oficial de Vite y copiar el código para crear una app react
    código--> npm create vite@latest    
2. Seleccionar (y)
3. Colocarle nombre al proyecto
4. Presionar enter para usar el mismo nombre de Package
5. Seleccionar el Framework React
6. Seleccionar la variante javascript 
7. indicarle que se instale y ejecute de una vez o desde el terminal
    - ingresar a la carpeta del proyecto: cd [nombre del proyecto]
    - npm install
    - npm run dev

## Personalización

1. Ingresar al index.html y cambiar el title y el idioma (es)
2. Ingresar a la carpeta src
3. abrir el archivo main.jsx y eliminar la línea import "./main.css"
4. ingresar al archivo App.css y eliminar todo el css preinstalado
5. ingresar al archivo App.jsx y eliminar todo lo que hay preinstalado en el return, dejar solo las etiquetas <>  </>, dentro de ellas va su código html
eliminar los import de las imágenes, debe quedar así:
    import { useState } from 'react'
    import './App.css'

## instalar mui

1. bajar el servidor (ctrl + c)
2. ir al sitio oficial de mui e ingresar a material ui 
    https://mui.com/material-ui/
3. copiar el código de instalación 
    npm install @mui/material @emotion/react @emotion/styled
4. ingresar a los componetes "get started"
5. seleccione el componente, despliegue el código, copielo y péguelo en vsc
6. para pegar un componente cree o ingrese a la carpeta Components dentro de src
7. dentro de Components Cree una carpeta para el componente (Nombre del componente primera letra en mayúscula)
8. crear el archivo jsx con el nombre del componente (Primera en mayúscula)
9. si desea crear un componente desde cero use el snipet "rafce"
   debe tener instalada en vsc la extensión 
    ES7+ React/Redux/React-Native snippets
    Si no pegue el código del componente en el archivo jsx (modifique el nombre de la función y si desea conviertala en una función flecha)
10. importe en su App.jsx el componente
    para usarlo se emeplea <NombreComponente />