import React from "react";
import Accordion from "../../Acordion";


export default function Punto6g() {
    return (
        <div>
            <Accordion title="G) Monitoreo del cambio en el entorno y el código almacenado en el mismo.">
                <p>El sistema de control de versiones git, ofrece una solución de control sobre el desarrollo de un proyecto con el cual podemos ver el progreso del trabajo solo con inspeccionar el cambio realizado en cada commit. </p>
                <p>Los pull request permiten no solo llevar de forma más ordenada las tareas en la etapa del desarrollo, sino también crear propuestas o cambios que puedan ser integrados posteriormente a dicho proyecto.</p>
                <br />
                <h6><strong>Pasos para hacer un Pull Request en GitHub</strong></h6>

                <ol>
                    <li>Haz un fork del repositorio al que quieres contribuir. En la página del repositorio, haz clic en el botón "Fork" en la esquina superior derecha de la pantalla. Esto creará una copia del repositorio en tu cuenta de GitHub.</li>
                    <li>Clona el repositorio forkeado en tu computadora. Para hacer esto, abre tu terminal y escribe:
                        <div><br /></div>
                        <pre><code> <kbd>git clone https://github.com/tu_nombre_de_usuario/repo_fork.git </kbd></code></pre>
                    </li>
                    <li>Crea una nueva rama para tus cambios. Esto mantendrá tus cambios separados de la rama principal del repositorio y te permitirá hacer un pull request sin incluir otros cambios que se hayan hecho en el repositorio principal desde que hiciste el fork. Para hacer esto, en la terminal, escribe:
                        <div><br /></div>
                        <pre><code><kbd>git checkout -b nombre_de_tu_rama</kbd></code></pre>
                    </li>
                    <li>Realiza los cambios necesarios en tu rama local.</li>
                    <li>Haz un commit de tus cambios. Para hacer esto, en la terminal, escribe:
                        <div><br /></div>
                        <pre><code>
                            <kbd>git checkout -b nombre_de_tu_rama</kbd><br />
                            <kbd>git add .</kbd><br />
                            <kbd>git commit -m "Descripción de tus cambios"</kbd>
                        </code></pre>
                    </li>
                    <li>Haz un push de tus cambios a tu repositorio forkeado. Para hacer esto, en la terminal, escribe:
                        <div><br /></div>
                        <pre><code><kbd>
                            git push origin nombre_de_tu_rama
                        </kbd>
                        </code></pre>
                    </li>
                    <li>Ve a la página del repositorio en GitHub y haz clic en el botón <u>"Compare &amp; pull request"</u> que aparece sobre la lista de archivos de tu rama.</li>
                    <li>Escribe una descripción detallada de tus cambios en el Pull Request y haz clic en el botón <strong>"Create pull request"</strong> para enviar tu Pull Request.</li>
                </ol>
            </Accordion>
        </div>
    );
}