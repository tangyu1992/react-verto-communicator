"use strict";
const messages = {
  "TITLE_ACTIVE_CALL": "Oops, actives Gespräch in Bearbeitung.",
  "MESSAGE_ACTIVE_CALL_HANGUP": "Es wärst du bereits in einer Konversation. Konversation beenden?",
  "MESSAGE_ACTIVE_CALL_BACK": "Es scheint als warst du in einer Konversation bevor die Sitzung beendet wurde. Diese Konversation fortsetzen?",
  "TITLE_INCOMING_CALL": "Eingehender Anruf",
  "MESSAGE_INCOMING_CALL": "Von ",
  "MESSAGE_NO_HANGUP_CALL": "Es gibt keine Gespräche die beendet werden können.",
  "MESSAGE_ENTER_FILENAME": "Bitte, Dateinamen eingeben",
  "TITLE_ENABLE_VIDEO": "Video für dieses Gespräch aktivieren?",
  "MESSAGE_ENABLE_VIDEO": "Video wird für die nächsten Gespräche aktiviert werden.",
  "TITLE_INSERT_BANNER": "Bitte Banner text eingeben",
  "TITLE_INSERT_CANVAS_ID": "Bitte Canvas ID eingeben",
  "TITLE_INSERT_LAYER": "Please insert the Layer",
  "TITLE_TRANSFER": "Gespräch weiterleiten?",
  "MESSAGE_TRANSFER": "Welches Ziel soll die Weiterleitung haben?",
  "LABEL_TRANSFER": "Ziel",
  "MESSAGE_DISPLAY_SETTINGS": "Die Vorschau Einstellungen können während eines Gesprächs nicht angezeigt werden",
  "BUTTON_END_CALL": "Anruf beenden",
  "BUTTON_CLOSE": "Schließen",
  "MESSAGE_PLAY": "Wiedergabe",
  "MESSAGE_STOP": "Stoppen",
  "MESSAGE_RECORD": "Aufnahme",
  "MESSAGE_STOP_RECORD": "Aufnahme beenden",
  "MESSAGE_SNAPSHOT": "Snapshot",
  "MESSAGE_VIDEO_MODE": "Video Modus",
  "MESSAGE_MUTE_MIC": "Mikrofon ein/ausschalten",
  "MESSAGE_MUTE_VIDEO": "Video ein/ausschalten",
  "MESSAGE_FULLSCREEN": "Vollbildmodus ein/ausschalten",
  "MESSAGE_SCREENSHARE": "Bildschirm teilen",
  "MESSAGE_OPEN_CLOSE_CHAT": "Chat öffnen/schließen",
  "MESSAGE_SPEAKER": "Lautsprecher",
  "MESSAGE_POPUP": "Popup",
  "CHAT_TITLE_MEMBERS": "Teilnehmer",
  "CHAT_TITLE": "Chat",
  "CHAT_NO_MEMBERS": "Es gibt keine Mitglieder zum anzeigen.",
  "CHAT_GENERAL": "Generell",
  "CHAT_TITLE_KICK": "Kick",
  "CHAT_KICK": "Kick",
  "CHAT_TITLE_VIDEO_FLOOR": "Video Floor",
  "CHAT_FLOOR": "Floor",
  "CHAT_TITLE_TRANSFER": "Weiterleiten",
  "CHAT_TRANSFER": "Weiterleiten",
  "CHAT_BANNER": "Banner",
  "CHAT_TITLE_SET": "Set",
  "CHAT_SET": "Set",
  "CHAT_TITLE_RESET": "Resetieren",
  "CHAT_RESET": "Resetieren",
  "CHAT_CANVAS": "Canvas",
  "CHAT_CANVAS_IN": "Canvas In",
  "CHAT_CANVAS_OUT": "Canvas Out",
  "CHAT_PREV": "Zurück",
  "CHAT_NEXT": "Weiter",
  "CHAT_LAYER": "Layer",
  "CHAT_AUDIO_VIDEO": "Audio/Video",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "Mikrofon ein/ausschalten",
  "CHAT_MUTE_MIC": "stumm schalten",
  "CHAT_UNMUTE_MIC": "stummschaltung deaktivieren",
  "CHAT_TITLE_MUTE_UNMUTE_VIDEO": "Stummschaltung ein/ausschalten",
  "CHAT_NO_MESSAGES": "Es gibt keine Nachrichten zum anzeigen.",
  "CHAT_SEND_MESSAGE": "Absenden",
  "CHAT_TYPE_MESSAGE": "Nachricht kann hier eingegeben werden...",
  "TITLE_CONTRIBUTORS": "Mitwirkende",
  "MESSAGE_CONNECTION_UNTRUSTED": "Die Verbindung ist ungesichert.",
  "MESSAGE_TOGGLE_NAVIGATION": "Navigation umschalten",
  "BANDWIDTH_INFO": "Info Bandbreite",
  "BANDWIDTH_INFO_INCOMING": "Eingehend:",
  "BANDWIDTH_INFO_OUTGOING": "Ausgehend:",
  "BANDWIDTH_INFO_VIDEO_RES": "Video Auflösung:",
  "IN_CALL": "Im Gespräch:",
  "LAST_CALL": "Letzter Anruf:   ",
  "OPEN_NEW_WINDOW": "Neues Fenster öffnen",
  "CHANGE_LOGIN_INFO": "Anmeldedaten verändern",
  "LOGOUT": "Abmelden",
  "ABOUT": "Über",
  "HELP": "Hilfe",
  "CONTRIBUTORS": "Mitwirkende",
  "TITLE_PREVIEW_SETTINGS": "Kamera und Mikrofon Einstellungen",
  "CAMERA_SETTINGS": "Kamera:",
  "MIC_SETTINGS": "Mikrofon:",
  "SAVE": "Speichern",
  "LOADING": "Ladend",
  "ERRORS" : "Fehler",
  "CALLING_TO": "Gesprächsaufbau zu ",
  "CANCELLING": "Abbrechen...",
  "DETERMINING_SPEED": "Geschwindigkeit wird analysiert...",
  "CALL_HISTORY": "Gesprächsverlauf",
  "CLEAR_CALL_HISTORY": "Gesprächsverlauf löschen",
  "NO_CALL_HISTORY": "Kein Gesprächsverlauf vorhanden.",
  "ENTER_EXTENSION": "Nummer eingeben",
  "CALL_EXTENSION": "Nummer anrufen",
  "LOGIN": "Anmelden",
  "LOGIN_INFORMATION": "Anmeldeinformationen",
  "SAVE_LOGIN_INFORMATION": "Anmeldeinformationen speichern",
  "INVALID_LOGIN_FIELDS": "Bitte die unteren Felder kontrollieren und erneut versuchen.",
  "NAME": "Name",
  "YOUR_NAME": "Dein Name",
  "EMAIL": "E-Mail",
  "YOUR_EMAIL": "Deine E-Mail",
  "USER": "Benutzer",
  "PASSWORD": "Passwort",
  "CALLER_ID": "Anrufer ID",
  "HOSTNAME": "Hostname",
  "WEBSOCKET_URL": "Websocket URL",
  "SETTINGS": "Einstellungen",
  "DEVICE_SETTINGS": "Geräte Einstellungen",
  "SHARE_DEVICE": "Gerät teilen",
  "SPEAKER": "Lautsprecher:",
  "SPEAKER_FEATURE": "Dein browser scheint diese Funktion nicht zu unterstützen",
  "PREVIEW_SETTINGS": "Vorschau Einstellungen",
  "REFRESH_DEVICE_LIST": "Aktualisieren Geräteliste",
  "GENERAL_SETTINGS": "Generelle Einstellungen:",
  "USE_VIDEO": "Video aktivieren",
  "USE_STEREO_AUDIO": "Stereo Audio",
  "USE_STUN": "STUN benützen",
  "SCALE_VIDEO": "Entfernte Kamera skalieren damit die Auflösung zusammenpasst",
  "ASK_BEFORE_RECOVER": "Nachfrage bevor das Gespräch wiederhergestellt wird",
  "BEST_FRAME_RATE": "Beste frame rate:",
  "AUDIO_SETTINGS": "Audio Einstellungen:",
  "ECHO_CANCEL": "Echo Cancellation",
  "NOISE_SUPPRESSION": "Noise Suppression",
  "HIGHPASS_FILTER": "Highpass Filter",
  "VIDEO_SETTINGS": "Video Einstellungen:",
  "REMOTE_ENCODER": "Dedicated Remote Encoder enabled.",
  "AUTO_SPEED_RES": "Automatisch geschwindigkeit messen und Auflösung einstellen",
  "RECHECK_BANDWIDTH": "Recheck bandwidth before each outgoing call",
  "CHECK_NETWORK_SPEED": "Netzwerk Geschwindigkeit messen",
  "VIDEO_QUALITY": "Video Qualität:",
  "MAX_INCOMING_BANDWIDTH": "Max eingehnde Bandbreite:",
  "MAX_OUTGOING_BANDWIDTH": "Max ausgehende Bandbreite:",
  "FACTORY_RESET": "Werkseinstellungen",
  "SAVE_DEVICE_SETTINGS": "Geräteeinstellungen speichern",
  "CHECK_RESOLUTION": "Überprüfen Auflösung.",
  "ERROR_RESOLUTION": "Fehler: interne Fehlerprüfung Auflösung",
  "BROWSER_COMPATIBILITY": "Browserkompatibilität prüfen.",
  "REFRESH_MEDIA_DEVICES": "Aktualisiern Medien Geräte.",
  "BROWSER_WITHOUT_WEBRTC": "Fehler: Browser unterstützt kein WebRTC.",
  "CHECK_PERMISSION_MEDIA": "Medien berechtigungen prüfen",
  "CHECK_PROVISIONING_CONF": "Provisioning Konfiguration.",
  "CHECK_LOGIN": "Anmeldung verifizieren.",
  "CHECK_CONNECTION_SPEED": "Verbindungsgeschwindikeit prüfen.",
  "ERROR_PERMISSION_MEDIA": "Fehler: Medien Berechtigung fehlgeschlagen",
  "ERROR_PROVISIONING_CONF": "Fehler: Provisioning fehlgeschlagen.",
  "PLEASE_WAIT": "Bitte warten...",
  "CANCEL": "Abbrechen",
  "CHAT_TITLE_VOL_MINUS": "Lautstärke -",
  "CHAT_TITLE_VOL_PLUS": "Lautstärke +",
  "CHAT_TITLE_GAIN_MINUS": "Gain -",
  "CHAT_TITLE_GAIN_PLUS": "Gain +",
  "CHAT_VOL_MINUS": "Lautstärke -",
  "CHAT_VOL_PLUS": "Lautstärke +",
  "CHAT_GAIN_MINUS": "Gain -",
  "CHAT_GAIN_PLUS": "Gain +",
  "LANGUAGE": "Sprache:",
  "BROWSER_LANGUAGE": "Browser-sprache",
  "BROWSER_SUPPORT_TITLE": "Browser nicht unterstützt",
  "BROWSER_SUPPORT_TEXT": "Der Browser Sie verwenden, wird nicht von unserer Software unterstützt. Bitte siehe unten für alternative Browser Sie verwenden können. Sobald Sie einen alternativen Browser gewählt haben, werden Sie in der Lage sein, den Sitzungslink es mit zuzugreifen.",
  "BROWSER_NAME_EDGE": "Kante",
  "BROWSER_VERSIONS_EDGE": "Alle",
  "BROWSER_NAME_CHROME": "Chrome",
  "BROWSER_VERSIONS_CHROME": "Alle",
  "BROWSER_NAME_FIREFOX": "Firefox",
  "BROWSER_VERSIONS_FIREFOX": "Alle",
  "BROWSER_NAME_OPERA": "Opera",
  "BROWSER_VERSIONS_OPERA": "Alle",
  "MORE_SETTINGS": "Mehr Einstellungen",
  "LESS_SETTINGS": "Weniger Einstellungen",
  "YOUR_PASSWORD": "Ihr Passwort",
  "VERSION": "Fassung: ",
  "GIT_REV": "Git Rev: ",
  "POWERED_BY": "Unterstützt von: ",
  "PREVIOUS": "Früher",
  "SET_LAYOUT_POSITION": "Set Layout-Position.",
  "ENTER_LAYOUT_POSITION": "Bitte Layoutposition eingeben.",
  "LAYOUT_POSITION": "Layout-Position",
  "DISCONNECTED": "Getrennt",
  "CONNECTING": "Verbindungs",
  "CONNECTED": "in Verbindung gebracht",
  "COM_STATUS": "Kommunikationsstatus .",
  "SCREEN_SHARE": "Screen Share",
  "PRESENTER": "Moderator",
  "WATCHING_CANVAS": "Beobachten Leinwand",
  "INPUT_CANVAS": "Eingang Leinwand",
  "CLEAR_ALERTS": "Warnungen löschen",
  "NO_LOG": "Keine Protokolldaten",
  "CLICK_DIAL": "Klicken Sie zum Wählen",
  "SETTINGS_LOGIN": "Melden Sie sich an Einstellungen zu ändern",
  "SETTINGS_USER": "Benutzereinstellungen",
  "SETTINGS_USER_LOGIN": "Login-Benutzereinstellungen ändern",
  "MENU_INFO": "Info-Menü",
  "CALL_FROM": "Anruf von:",
  "ANSWER": "Antworten",
  "REJECT": "Ablehnen",
  "ACTIVE": "aktiv",
  "PLEASE_ENTER": "Bitte geben Sie eine gültige ",
  "VIEW_ALERT": "Ansicht Alarmprotokoll ",
  "NO_CALL": "kein Anruf"
};
module.exports = messages;