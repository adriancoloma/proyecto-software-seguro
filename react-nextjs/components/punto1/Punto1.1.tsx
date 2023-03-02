import React from "react";
import Accordion from "../Acordion";


export default function Punto1_1() {
    return (
        <div>
            <Accordion title="A) Seguridad del entorno de desarrollo">
                <h2>Gestión de Acceso y Autenticación</h2>
                <p>En este proyecto, la gestión de acceso y autenticación se maneja de la siguiente manera:</p>
                <ul>
                    <li>El gerente del proyecto tiene el rol de Owner en el repositorio de Git y Git Hub.</li>
                    <li>El gerente del proyecto selecciona al Administrador del repositorio entre los miembros del proyecto. Este debe tener la capacidad de integrar las distintas ramas que surgirán en el repositorio y asignar o quitar roles.</li>
                    <li>Los desarrolladores tienen permisos solo de escritura, mientras que los encargados de validar el código (arquitectos o testers) tienen permisos solo de lectura dentro del repositorio.</li>
                    <li>En caso de que un miembro del equipo se retire del proyecto, sus permisos se deben retirar preferiblemente 24 horas antes de notificarle.</li>
                    <li>Cada semana, un experto en seguridad revisará las dependencias del proyecto para validar que estén actualizadas y con los últimos parches de seguridad disponibles.</li>
                </ul>
                <h2>Procesos de Revisión y Pruebas</h2>
                <p>En este proyecto, los procesos de revisión y pruebas se manejan de la siguiente manera:</p>
                <ul>
                    <li>El desarrollador es responsable de ejecutar todas las pruebas unitarias una vez terminada la funcionalidad desarrollada y de subir su código a un gestor de versiones.</li>
                    <li>El Arquitecto de Software revisará el código y si detecta alguna posible falla, solicitará la revisión por parte del desarrollador.</li>
                </ul>
                <h2>Gestión de la configuración y control de versiones</h2>
                <p>En este proyecto, la gestión de la configuración y el control de versiones se maneja utilizando la metodología gitflow, que tiene las siguientes fases:</p>
                <ul>
                    <li><strong>Feature:</strong> Se crea una nueva rama a partir de la rama "develop" para desarrollar una nueva característica. Una vez que la característica está completa, se fusiona de nuevo en la rama "develop".</li>
                    <li><strong>Release:</strong> Se crea una nueva rama a partir de la rama "develop" para preparar un nuevo lanzamiento. En esta fase, se realizan pruebas finales y correcciones de errores. Una vez que el lanzamiento está completo, la rama de lanzamiento se fusiona en la rama "master" y en la rama "develop".</li>
                    <li><strong>Hotfix:</strong> Si se encuentra un error crítico en la rama "master", se crea una nueva rama a partir de la rama "master" para corregir el error. Una vez que el error está corregido, la rama de corrección se fusiona en la rama "master" y en la rama "develop".</li>
                </ul>
            </Accordion>
        </div>
    );
}