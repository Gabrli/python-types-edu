
export const tasksElements = [
  "Zadanie nr.1",
  "Napisz funkcję, która przyjmuje jako argument string reprezentujący liczbę całkowitą i zwraca tę liczbę w postaci typu int.",
  "--------",
  "Zadanie nr.2",
  "Napisz funkcję, która przyjmuje jako argument listę zawierającą elementy różnych typów",
  "(np. int, float, bool, str), konwertuje wszystkie elementy na stringi, a następnie zwraca nową listę zawierającą te stringi.",
  ""
];

export const answersElements1 = [
  "Zadanie nr.1:",
  "def conversion(string):",
  "return int(string)",
  'print(conversion("40"))',
  ''
];
export const answersElements2 = [
  "Zadanie nr.2:",
  'lista = [True, "auto", 30]',
  "def test(lista):",
  " newList = []",
  " for x in lista:",
  "   newList.append(str(x))",
  "return newList",
  "print(test(lista))",
  ''
];