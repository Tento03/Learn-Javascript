const letters = new Set(["a","b","c"])
letters.add("d")
letters.add("e")

for (const letter of letters) {
    console.log(letter);
}