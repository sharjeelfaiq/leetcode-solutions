/**
 * Deep Object Traversal / Recursive Object Traversal (Unknown)
 *
 * Pattern: Object, Recursion
 * Source: Local example
 *
 * Time: O(n)
 * Space: O(n)
 */

function traverseObject(value, path = "", entries = []) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const nextPath = `${path}[${i}]`;
      traverseObject(value[i], nextPath, entries);
    }

    return entries;
  }

  if (value !== null && typeof value === "object") {
    for (const key of Object.keys(value)) {
      const nextPath = path ? `${path}.${key}` : key;
      traverseObject(value[key], nextPath, entries);
    }

    return entries;
  }

  entries.push([path, value]);
  return entries;
}

const output = traverseObject({
  user: {
    name: "Ada",
    roles: ["admin", "editor"],
  },
  active: true,
});
console.log(output);
