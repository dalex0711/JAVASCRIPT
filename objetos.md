
# 🧱 JavaScript: Guía Completa de Objetos

## ✨ Descripción General
Los **objetos** en JavaScript son estructuras clave para organizar y manipular datos. Están formados por pares **clave: valor** y se usan para representar entidades del mundo real como personas, productos, configuraciones, etc.

```js
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Bogotá"
};
```

Puedes acceder a sus propiedades con `.` o con `[]`:
```js
console.log(persona.nombre);     // "Ana"
console.log(persona["ciudad"]); // "Bogotá"
```

---

## 🔄 Crear y Modificar Objetos

```js
// Crear un objeto vacío
const obj = {};

// Añadir propiedades
obj.nombre = "Carlos";
obj["edad"] = 30;

// Modificar
obj.nombre = "Luis";

// Eliminar
delete obj.edad;
```

---

## 🌐 Recorrer Objetos

### ✏️ Usando `for...in`
```js
for (let clave in persona) {
  console.log(clave, persona[clave]);
}
```

### 🔍 Obtener claves, valores y entradas
```js
Object.keys(persona);   // ["nombre", "edad", "ciudad"]
Object.values(persona); // ["Ana", 25, "Bogotá"]
Object.entries(persona);// [["nombre", "Ana"], ["edad", 25], ...]
```

---

## 🚀 Combinar Objetos

### ✔️ Con `Object.assign()`
```js
const destino = { a: 1 };
const fuente = { b: 2 };
const combinado = Object.assign(destino, fuente);
// Resultado: { a: 1, b: 2 }
```

### ✔️ Con operador spread `...`
```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinado = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
```

---

## 🔹 Comparar Objetos
```js
const a = { nombre: "Ana" };
const b = { nombre: "Ana" };

console.log(a === b); // false (diferentes referencias)
```

Para compararlos por valor:
```js
JSON.stringify(a) === JSON.stringify(b); // true (si tienen el mismo orden)
```

---

## 🎓 Ejemplos Avanzados

### 📚 Array de objetos + filtros
```js
const usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Pedro", edad: 19 }
];

const mayores = usuarios.filter(user => user.edad > 21);
```

### 🧰 Combinar array + objetos + map
```js
const productos = [
  { id: 1, nombre: "A", categoria: "X" },
  { id: 2, nombre: "B", categoria: "X" },
  { id: 3, nombre: "C", categoria: "Y" }
];

const porCategoria = new Map();

productos.forEach(producto => {
  if (!porCategoria.has(producto.categoria)) {
    porCategoria.set(producto.categoria, []);
  }
  porCategoria.get(producto.categoria).push(producto.nombre);
});
```

---

## 🔍 Buenas Prácticas
- Usa `const` para declarar objetos que no cambiarán de referencia.
- Recorre con `for...in` solo objetos simples (no arrays).
- Usa `Object.hasOwn()` o `hasOwnProperty()` para verificar si una clave pertenece al objeto directamente.
- Si trabajas con arrays de objetos, combínalos con `filter`, `map`, `find`, etc.

---

## 📂 Ejercicios relacionados:
- [03-objetos.js](./P-Basicos-01/03-objetos.js)
- [06-setMap.js](./P-Basicos-01/06-setMap.js)
- [07-setMap.js](./P-Basicos-01/07-setMap.js)

---
