# Recordatorios locales de Atelier

## Lo que está conectado

Capacitor 8.6.0 con @capacitor/local-notifications 8.3.1. Android e iOS sincronizados. Los archivos que empaqueta Capacitor están en Atelier (webDir); la copia de la raíz se ha actualizado también para evitar perder esta función al copiar archivos. No se reemplazó el resto de los cambios del proyecto.

En Configuración → Recordatorios: Guardar y activar solicita permiso cuando es necesario y programa los avisos; Probar notificación programa un ejemplo para unos segundos después; Desactivar cancela únicamente los avisos de Atelier. El botón de prueba puede retrasarse por el sistema. Al tocar un aviso, la app abre la palabra y su frase. La programación requiere guardar; cerrar la ventana no guarda cambios.

## Límites visibles

Se programan 60 avisos futuros como máximo, más una prueba. Se renuevan al abrir o volver a la app si quedan menos de 30, o cambia la zona horaria. Si no vuelves a abrirla durante toda esa programación, los avisos terminan: no hay un servidor ni una tarea JavaScript que se ejecute indefinidamente con la app cerrada. La fecha final se muestra en pantalla.

La colección inicial contiene 24 palabras francesas y 24 alemanas, cada una con frase y traducción revisadas. Los filtros de favoritos y pendientes se cruzan con esta colección y los identificadores del vocabulario. Si no hay coincidencias, se avisa en lugar de enviar otro contenido. Al actualizar favoritos o aprendidas, guarda de nuevo para aplicar el cambio inmediatamente a los avisos ya programados.

Se usa la hora local y una franja dentro del mismo día. Una vez al día utiliza la hora inicial. Las entregas son aproximadas: batería, permisos, ajustes del canal, No molestar y detención forzada pueden afectar a los avisos. No se exige permiso de alarmas exactas. Cambiar de zona horaria se aplica al volver a la app.

## Comprobar en Android Studio

1. Sincroniza Gradle si Android Studio lo solicita. Usa el JDK 21 ya configurado en el proyecto (C:/Users/Install/.jdks/jbr-21.0.11); el JBR 25 incluido en otra instalación no es compatible con este Gradle.
2. Compila y ejecuta la app en un móvil o emulador. Instala como actualización con tu firma habitual para conservar los datos.
3. Abre Configuración → Recordatorios → Probar notificación y concede permiso. Comprueba el panel de notificaciones y toca el aviso.
4. Guarda una frecuencia y comprueba el mensaje de programación. Sal de la app sin forzar su detención; comprueba un aviso posterior.
5. Pulsa Desactivar y comprueba que deja de haber avisos programados.

En iPhone/iPad es necesario compilar y firmar con Xcode en macOS; desde Windows se han actualizado los archivos y dependencias SPM, no se ha compilado iOS.

## Archivos y mantenimiento

recordatorios-datos.js contiene ejemplos; recordatorios-motor.js genera fechas y filtra palabras; recordatorios-app.js conecta controles, permisos, programación y apertura. vendor contiene las distribuciones oficiales de Capacitor y LocalNotifications, con sus licencias MIT. El icono Android es android/app/src/main/res/drawable/ic_stat_atelier.xml.

Después de cambiar archivos web: npx cap sync android (o ios en su entorno). Después de actualizar las dependencias Capacitor, ejecuta node tools/preparar-notificaciones.cjs antes de sincronizar para renovar los archivos de vendor. No basta con copiar el ZIP web a una app que no tenga instalado y sincronizado el complemento nativo.

Referencias: https://capacitorjs.com/docs/apis/local-notifications y el código de la versión 8.3.1 instalada.

Verificación automatizada: fechas, días laborables/fines de semana, cambio de horario, filtros, permisos denegados, recuperación de errores, programación limitada, cancelación aislada y apertura. La recepción real requiere la prueba en el dispositivo descrita arriba.


Presentación actualizada: título Atelier; palabra entre comillas con «Nueva palabra», significado, frase y traducción separados. Android utiliza BigTextStyle al expandir el aviso. El sistema decide fuentes, colores y recortes. Los avisos pendientes se reprograman con el nuevo formato al abrir la app actualizada; si el sistema no permite renovarlos, se informa del error. La prueba utiliza el mismo formato.
