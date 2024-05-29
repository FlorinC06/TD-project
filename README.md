
CUM SĂ INSTALEZI EXTENSIILE NECESARE PENTRU A RULA CODUL SERVERULUI
========================================================

1. Instalare Node.js

   - Accesează site-ul oficial Node.js: https://nodejs.org/
   - Descarcă versiunea corespunzătoare sistemului tău de operare.
   - Urmează instrucțiunile de instalare furnizate pentru sistemul tău de operare.
   - După instalare, verifică dacă Node.js și npm au fost instalate corect rulând următoarele comenzi în terminal:
     ```
     node -v
     npm -v
     ```

2. Instalare MongoDB

   - Accesează site-ul oficial MongoDB: https://www.mongodb.com/try/download/community
   - Descarcă versiunea corespunzătoare sistemului tău de operare (Windows, macOS, Linux).
   - Urmează instrucțiunile de instalare furnizate pentru sistemul tău de operare.
   - După instalare, asigură-te că MongoDB este pornit și rulează local. Pentru a face acest lucru, deschide un terminal nou și rulează comanda:
     ```
     mongod
     ```

3. Rularea codului serverului

   - Deschide un terminal sau o linie de comandă.
   - Navighează către directorul în care ai salvat fișierul cu codul serverului folosind comanda `cd`. De exemplu, dacă fișierul este în directorul "server", folosește comanda:
     ```
     cd calea/catre/directorul-cu-cod
     ```

   - Asigură-te că ai un fișier `package.json` în directorul proiectului tău.

4. Crearea directorului `node_modules` și instalarea dependențelor

   - Instalează dependențele proiectului folosind npm (Node Package Manager). Rulează următoarea comandă în terminal pentru a instala dependențele și a crea directorul `node_modules`:
     ```
     npm install
     ```

5. Pornirea serverului

   - Pornește serverul folosind comanda:
     ```
     npm start
     ```
     Sau, alternativ, poți folosi comanda:
     ```
     node numele-fisierului-cu-codul-serverului.js
     ```

6. Conectarea la MongoDB

   - Folosește următorul URL de conexiune în codul serverului:
     ```
     mongodb://localhost:27017/magazinDB
     ```

Acum ar trebui să poți accesa și interacționa cu serverul tău local folosind adresa URL furnizată.
