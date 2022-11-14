# OSP
OSP der Gruppe 4 Raumbetreuer App
### Frontend zum Laufen bringen
* start: "react-scripts start"
* build: "react-scripts build"
* test: "react-scripts test"
* eject: "react-scripts eject"

## Einleitung in das Projekt
Mit dem Projekt Raumbetreuer, soll von der Gruppe 4 für Frau Hermanns das Problem am Georg-Simon-Ohm Berufskolleg angegangen werden, dass das Aufnehmen und Protokollieren von Defekten und der anschließende Informationsaustausch nur umständlich und unter Schwierigkeiten durch die Lehrer passiert. Es soll eine Lösung erarbeitet werden, welche es Lehrern ermöglicht, Defekte schneller aufzunehmen und andere betroffene Lehrer schneller über den Defekt in Kenntnis zu setzen. Somit wird auch erreicht, dass Defekte schneller bearbeitet und behoben werden können. 

## 1. Zielbestimmung 
Ziel der Software ist, dem Kunden eine zentralisierte Lösung zur Erfassung, Protokollierung und Archivierung von Defekten am Georg-Simon-Ohm Berufskolleg zur Verfügung zu stellen. Diese soll dabei schnell und intuitiv funktionieren und dem Nutzer Zeit einsparen. Dazu soll die Software leicht für nicht IT-affine Lehrer nutzbar sein.

### 1.1 Musskriterien 
**/M01/ Meldung von Defekten**

Der Nutzer kann Defekte, mit einer optionalen Beschreibung, über die App melden.

**/M02/ Rechtekonzept**

Es gibt für verschiedene Arten von Nutzern ein Rechtekonzept zur Unterscheidung. Abhängig davon stehen dem Nutzer andere Funktionalitäten innerhalb der App zur Verfügung. 

- Lehrer
- Raumbetreuer 
- PC-Werkstatt

**/M03/ Archivierung**

Gemeldete Defekte werden mit ihren jeweiligen Informationen archiviert und können in der App abgerufen werden. 

 

**/M04/ Statusupdates**

Der Nutzer kann mit Statusupdates über Neuigkeiten innerhalb der App informiert werden. 

 

**/M05/ Passwort Zurücksetzung**

Der Nutzer kann sein Passwort auf Wunsch zurücksetzen. Dazu wird eine Verifizierung per E-Mail als Authentifizierung benötigt. 

**/M06/ Responsives Design**

Die Webapplikation soll im responsiven⁸ Design geschrieben werden, sodass man im Website Design verschiedene Gerätearten anspricht. Dazu gehören: Desktop, Smartphones und Tablets. 

 

**/M07/ Schnelles Melden von Defekten**

Defekte sollen in max. drei Schritten schnell gemeldet werden:  

1. Auswählen des Raums  

2. Auswählen des defekten Gerätes  

3. (Optionales Hinzufügen einer Beschreibung)  

4. Absenden der Meldung 

 

**/M08/ Raumzustand auslesen**

Lehrer und die PC-Werkstatt können den aktuellen Zustand eines Raumes auslesen. Damit können Informationen ausgelesen wie z.B. welche Defekte sind schon gemeldet und welcher Defekt ist es.   

 

**/M09/ Anmeldung**

Der Nutzer kann sich mit den seinem Passwort und der E-Mail in der App anmelden.  

 

**/M10/ Registrierung**

Nutzer können sich mit der E-Mail-Adresse vom GSO registrieren. Es ist eine Verifizierung nötig, um den Registrierungsprozess abzuschließen. 

 

**/M11/ Abmeldung**

Nutzer können sich vom System abmelden. 

 

**/M12/ Anleitung**

Es soll eine Anleitung erstellt werden, für eine erleichterte erste Benutzung. 

 

**/M13/ Administratorenhandbuch**

Für die spätere Wartung bzw. Erweiterung der Software wird der Code inklusive Administratorenhandbuch übergeben. 

### 1.2 Wunschkriterien 

 

**/W01/ Bild-Upload**

Alle Nutzer können zu den gemeldeten Defekten optional Bilder hochladen, damit die PC-Werkstatt Probleme mit Geräten schneller identifizieren können. 

 
**/W02/ Der Nutzer kann Geräte als Defekt markieren**

Geräte können für einen Raum markierbar sein, damit die PC-Werkstatt die Information hat, wo sich genau ein defektes Gerät befindet. 

 

**/W03/ Anleitung mit Bildern für eine erleichterte Benutzung**

Es soll eine Anleitung mit Bildern erstellt werden, für eine erleichterte erste Benutzung. 

 

### 1.3 Abgrenzungskriterien 

 

**/A01/ Mobile Applikation** 

Es soll keine Software für mobile Geräte in Form einer mobilen Applikation gebaut werden. Die Software kann auf mobilen Endgeräten in Form einer Webapplikation aufgerufen werden. 

**/A02/ Desktop Applikation**

Es soll keine Software für mobile Geräte in Form einer mobilen Applikation gebaut werden. Die Software kann auf mobilen Endgeräten in Form einer Webapplikation aufgerufen werden. 

**/A03/ Schüler Login**

Es soll kein Login für Schüler möglich sein, da Schüler des Berufskollegs keinen Zugriff auf diesen Dienst haben sollen.

## 2 Produkteinsatz 

 
### 2.1 Anwendungsbereiche 

Webgestützte Applikation für Lehrer und die PC-Werkstatt zur erleichterten Meldung von Defekten von technischen Schulgeräten am GSO-Berufskolleg. 


### 2.2 Zielgruppen 


Das finale Produkt wird von den Lehrern und der PC-Werkstatt des Georg-Simon-Ohm Berufskollegs genutzt.  

Raumbetreuer sind für jeweils einen Raum zuständig. Die PC-Werkstatt bekommt die Defekte gemeldet oder Sie können die Informationen selbst nachschauen. 

 

### 2.3 Betriebsbedingungen 

Die Applikation soll auf dem Schulserver laufen. Die Applikation soll bis auf eventuelle Wartungsarbeiten rund um die Uhr in Betrieb sein.

## 3 Produktübersicht

## 4 Produkt-Funktionen 

 

### 4.1 Benutzer-Kennung 

 

Ein im System registrierter Benutzer kann das System erst nutzen, wenn er angemeldet ist. 

 

**/F0010/ Anmelden**

Ein bereits registrierter Benutzer kann sich über die Login-Seite des Systems anmelden. Dazu ist seine Kennung erforderlich: 

* E-Mail 

* Passwort 

**/F0020/ Registrieren**

Nutzer können sich über die Start- bzw. Login-Seite des Systems registrieren lassen. Zum Registrieren sind mindestens folgende Angaben erforderlich: 

* E-Mail 

* Passwort 

Zur erfolgreichen Registrierung ist nach Eingabe des Passwortes und der E-Mail eine Verifizierung per E-Mail nötig. Anschließend kann sich der Nutzer über die Anmeldemaske mit seinen festgelegten Daten anmelden. 

 

**/F0030/ Abmelden**

Der angemeldete Benutzer kann sich jeder Zeit wieder vom System abmelden. Das 

 

**/F0040/ Passwort zurücksetzen**

Der angemeldete Benutzer kann das Passwort zurücksetzen. Dafür muss eine Verifizierung mit einer E-Mail passieren. Nach erfolgreicher Zurücksetzung des Passworts erhält der Nutzer eine Bestätigung per Mail. 

 

### 4.2 App-Funktionen 

 

Angemeldeten Nutzern stehen innerhalb der App verschiedene Funktionen zu Verfügung.  

**/F0100/ Archivierte Defekte von eigenem Raum auslesen**

Raumbetreuer sollen in der App alle archivierten Defekte des eigenen Raums auslesen können. Diese werden dem Nutzer tabellarisch angezeigt. 

 

**/F0110/ Melden von Defekten**

Der Nutzer kann in der App Defekte melden. Defekte können gemeldet werden, indem ein Raum und dann das jeweilige defekte Gerät ausgewählt werden kann. Anschließend soll der User die Option haben eine Beschreibung hinzuzufügen. Ist die Meldung durch den Lehrer abgeschickt, wird die PC-Werkstatt darüber informiert. 

 

**/F0120/ Geräte als Defekt markieren**

Geräte sollen für einen Raum, auf einer kleinen, simplen Raumkarte, markierbar sein, damit die PC-Werkstatt schneller die Information hat, wo sich genau ein defektes Gerät befindet. 

 

**/F0130/ Bild-Upload**

Alle Nutzer können zu den gemeldeten Defekten optional Bilder hochladen, damit die PC-Werkstatt Probleme mit Geräten schneller identifizieren können. 

 

**/F0140/ Archivierte Daten aller Räume auslesen**

Nutzer von der PC-Werkstatt sollen in der App alle archivierten Defekte aller Räume auslesen können. Diese werden dem Nutzer tabellarisch angezeigt.  

 

**/F0150/ Aktuellen Raumzustand auslesen**

Nutzer können den aktuellen Zustand eines Raumes auslesen. Damit können Informationen ausgelesen wie z.B. welche Defekte sind schon gemeldet und welcher Defekt ist es.   

 

## 5 Produktdaten 

 

**/D01/ Meldedaten**

Gemeldete Defekte werden inkl. der angegebenen Daten in einer Datenbank gespeichert: 

* Raum ID 

* Geräte ID 

* Optionale Gerätebeschreibung 

* Zeitstempel 

* Melder 

* Status 

 

**/D02/ Nutzerdaten**

Für Nutzer werden für die Anmeldung erforderliche Daten gespeichert: 

* Passwort 

* E-Mail-Adresse 

**/D03/ Raumdaten**

Es werden Räume abgespeichert, mit der dazugehörigen Raum ID. Dazu werden für jeden Raum die Geräte mit ihren IDs gespeichert: 

* Raum ID 

* Alle Geräte IDs eines Raumes 

 

## 6 Benutzeroberfläche 

 

### 6.1 Layout und Navigation 

 

Die Software soll im responsiven Design gehalten werden, wodurch sich das Layout der Seite an die jeweilige Größe des Gerätes anpasst. Bei Desktop Geräten wird für Navigation auf der Webpage die Maus genutzt und bei mobilen Geräten wie Tablets und Smartphones wird mit Touchscreen navigiert. 

 

### 6.2 Singlepage-Applikation 

 

Die Software wird als Singlepage-Applikation⁷ entwickelt. Dies ermöglicht, dass alle nötigen Ressourcen der Webpage zu Beginn geladen werden und bei einer Interaktion mit der Seite, werden nur die nötigsten Daten nachgeladen, statt die ganze Seite selbst. 

 

### 6.3 Farbthema und Design 

 

Das Design der Webapplikation soll angelehnt sein an das strukturelle und farbliche Thema der Homepage des Georg-Simon-Ohm Berufskollegs. 

 

## 7 Datenschnittstellen 

 

* Die Software liest mit der Eingabe durch den Nutzer Text ein. Dieser wird z.B. für das Erstellen eines Defektes genutzt.  

* Datenaustausch mit dem Server erfolgt mit dem JSON¹ -Datenformat. 

* Für die Speicherung der Meldungen wird eine SQL⁵ -Datenbank angelegt 

* Die Felder werden als INT², STRING⁴, DATE⁶ oder BOOL³ angelegt 
 

 

## 8 Rahmenbedingungen 

 

### 8.1 Technische Rahmenbedingungen 

 
* Für die geplante Arbeit werden sowohl die Rechner der Georg-Simon-Ohm als auch private Geräte wie z.B. MacBooks genutzt. 

* Die Bereitstellung erfolgt nach Abschluss als Webservice 

 

## 9 Qualitätszielbestimmung 

 
Diese tabellarische Übersicht dient lediglich der Schwerpunktsetzung im Projekt. Es lässt sich keinerlei rechtlicher Anspruch daraus ableiten.


| | Sehr relevant | Relevant | normal | Nicht relevant |
| --- | --- | --- | --- | --- |
| Portierbarkeit |  |  | X  | |
| Zuverlässigkeit | X |  |   | |
| Korrektheit | X |  |  | |
| Benutzerfreundlichkeit |  | X |   | |
| Effizienz | X |  |  | |
| Kompatibilität |  |  | X  | |
| Robustheit |  | X |  | |


### 9.1 Qualitätsmanagement 

**/QM01/ Tests**

Zur Qualitätssicherung werden während der Entwicklung Funktionstests geschrieben und genutzt. Ein Testbericht wird dem Administratorenhandbuch beigefügt. 


 # 10 Glossar
 
| Nr. | Begriff | Erläuterung |
| --- | --- | --- |
| 1. | JSON | Kompaktes Format zur Speicherung von Daten | 
| 2. | INT | Datentyp zur Speicherung von Ganzzahlen |
| 3. | BOOL | Datentyp zur Speicherung von Wahrheitswerten |
| 4. | STRING | Datentyp zur Speicherung von Text |
| 5. | SQL | SQL ist eine Datenbanksprache zur Definition von Datenstrukturen |
| 6. | DATE | Datentyp zur Speicherung von einem Datum |
| 7. | Singlepage-Applikation | Technologie, Webpages nur mit einer Seite umzusetzen |
| 8. | Responsive | Es handelt sich um eine gestalterische und technische Denkweise zur Erstellung von Websites, so dass diese auf Eigenschaften des jeweiligen Endgeräts reagieren |


 


