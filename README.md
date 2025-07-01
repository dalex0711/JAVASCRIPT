# 📘 Hoja de Trucos de JavaScript - Fundamentos

## 🗂 Tabla de Contenidos

1. 📌 [Variables y Tipos de Datos](#1-variables-y-tipos-de-datos)
2. 📊 [Condicionales](#2-condicionales)
3. 📚 [Arrays](#3-arrays)
4. 🧱 [Objetos](#4-objetos)
5. 🔄 [Bucles](#5-bucles)
6. 📦 [Set y Map](#6-set-y-map)
7. 💪 [Ejercicios para practicar](#7-ejercicios-para-practicar)

---

## 1. 📌 Variables y Tipos de Datos

```js
let nombre = "Ana";
const edad = 25;
let activo = true;
```

Tipos: `string`, `number`, `boolean`, `undefined`, `null`, `object`, `symbol`, `bigint`.

---

## 2. 📊 Condicionales

Las condicionales permiten ejecutar código dependiendo del valor de una condición.

### ✅ if / else / else if

```js
const nota = 7;

if (nota > 6.0) {
  console.log("Aprobado");
} else if (nota === 6.0) {
  console.log("Aprobado con nota mínima");
} else {
  console.log("Reprobado");
}
```

### ✅ Operador ternario

```js
const nota = 7;
nota >= 6 ? console.log("Aprobado") : console.log("Reprobado");
```

### ✅ switch

```js
switch (nota) {
  case 6:
    console.log("Aprobado con nota mínima");
    break;
  case 7:
    console.log("Aprobado");
    break;
  default:
    console.log("Rango no reconocido");
}
```

📂 **Ejercicio relacionados:** [01.js](./P-Basicos-01/01-condicionales.js) // [01-2.js](./P-Basicos-01/01-2.condicionales.js)

---

## 3. 📚 Arrays

```js
let frutas = ["manzana", "pera", "banana"];
console.log(frutas[1]);
```

```js
frutas.push("uva");
frutas.pop();
frutas.forEach(fruta => console.log(fruta));
```

📂 **Ejercicio relacionados:** [02.js](./P-Basicos-01/02-arrays.js)

---

## 4. 🧱 Objetos

```js
let persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Bogotá"
};

console.log(persona["edad"]);
```

```js
for (let clave in persona) {
  console.log(clave, persona[clave]);
}
```

📂 **Ejercicio relacionados:** [03.js](./P-Basicos-01/03-objetos.js)

---

## 5. 🔄 Bucles

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let fruta of frutas) {
  console.log(fruta);
}

for (let clave in persona) {
  console.log(clave);
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

📂 **Ejercicio relacionados:** [04.js](./P-Basicos-01/04-bucles.js)

---

## 6. 📦 Set y Map

### 🔹 Set
```js
let conjunto = new Set(["a", "b", "a"]);
conjunto.add("c");
conjunto.has("a");
conjunto.delete("b");
conjunto.size;
conjunto.clear();
```

### 🔹 Map
```js
let mapa = new Map();
mapa.set("Colombia", "Bogotá");
mapa.get("Colombia");
mapa.has("clave");
mapa.delete("clave");
mapa.clear();
mapa.size;
```

```js
for (const [clave, valor] of mapa.entries()) {
  console.log(clave, valor);
}

mapa.keys();
mapa.values();
mapa.entries();
```

### 🔹 filter
```js
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(n => n % 2 === 0);

const tareas = ["estudiar", "comer", "estudiar"];
const cuantasVeces = tareas.filter(t => t === "estudiar").length;
```

📂 **Ejercicio relacionados:** [05.js](./P-Basicos-01/05-set-map-filter.js)
