# Panduan Lengkap: Algoritma, Pseudocode, dan Flowchart

---

## 1. Apa Itu Algoritma?

**Algoritma** adalah istilah dasar dalam ilmu komputer.

- **Definisi:**  
  An algorithm is a **step-by-step set of instructions** or a sequence of operations designed to perform a specific task or solve a particular problem.

- **Manfaat:**  
  They provide a **systematic and well-defined approach** to solving problems and achieving specific objectives.

**Penjelasan tambahan singkat:** Algoritma seperti resep masak — langkah demi langkah yang jelas agar hasilnya selalu sama.

---

## 2. Cara Memvisualisasikan Algoritma

Algoritma bisa divisualisasikan dengan dua cara utama:

```
        Algorithm
            |
   Can be visualized with
     /                \
Pseudocode          Flowchart
```

**Penjelasan tambahan singkat:** Pseudocode lebih ke teks mirip kode, sedangkan Flowchart lebih visual dengan bentuk dan panah.

---

## 3. Pseudocode

**Definisi:**  
Translates the algorithm into a form that is closer to actual programming code, but more focus on the **process understanding**, making it easier to understand and plan.

### Contoh Pseudocode: Making a Tea (Langkah 1)

```pseudocode
START MakingTea
CHECK items needed:
    Kettle with water
    Tea bag
    Cup
    Spoon

IF missing any items
    GET missing items first
```

### Contoh Pseudocode: Making a Tea (Langkah 2)

```pseudocode
PREPARE tea:
    Turn on kettle
    PUT tea bag in cup
    WHEN water boils:
        POUR into cup
        WAIT 3 minutes

ADD extras if wanted:
    IF want sugar
        STIR in sugar
    IF want milk
        ADD milk
    REMOVE tea bag
    STIR tea
    ENJOY when cool enough!
END MakingTea
```

### Contoh Pseudocode: Making Instant Noodles

```pseudocode
START MakingInstantNoodles
CHECK items needed:
    Instant noodles package
    Bowl
    Kettle/Pot with water
    Fork/Chopsticks

IF missing any items
    GET missing items first

PREPARE noodles:
    BOIL water
    OPEN noodle package
    PUT noodles in bowl
    ADD seasoning packets

    WHEN water boils:
        POUR hot water into bowl
        COVER bowl
        WAIT 3 minutes
        IF noodles still hard
            WAIT 1 more minute
        ELSE
            STIR noodles

OPTIONAL additions:
    IF want egg
        ADD egg
    IF want vegetables
        ADD vegetables

ENJOY while hot!
END MakingInstantNoodles
```

### Contoh Pseudocode: Make a Bread Toast Jam

```pseudocode
MAKE sandwich:
    PUT toast on plate
    OPEN jam jar
    SPREAD jam evenly
    IF too much
        SCRAPE excess
    IF too little
        ADD more

CLEAN UP:
    CLOSE jam jar
    WIPE knife
    RETURN jam to fridge

ENJOY while warm!
END ToastWithJam
```

**Penjelasan tambahan singkat:** Pseudocode seperti "bahasa manusia" yang mendekati kode program, sehingga mudah dibaca bahkan oleh orang yang belum bisa coding.

---

## 4. Computational Pseudocode

**Definisi:**  
Computational pseudocode is a way to describe algorithms and computational processes in simple, **human-readable language** before converting them into actual programming code.  
It focuses on solving problems step by step using **computational thinking**.

**Key Elements:**
- Input/Output
- Calculations
- Decision Making
- Repetition/Loops
- Variables
- Error Handling

**Kapan Menggunakan Computational Pseudocode?**
- Solving math problems
- Creating algorithms
- Processing data
- Building computer programs
- Handling user interactions
- Managing system processes

**Penjelasan tambahan singkat:** Computational Pseudocode lebih formal dan siap diterjemahkan ke bahasa pemrograman (Python, Java, dll).

### Perbandingan: Regular Pseudocode vs Computational Pseudocode

**Regular Pseudocode (Contoh sederhana tentang air):**

```pseudocode
START
Check if water is frozen
If frozen, it's below 0 degrees Celsius
If not frozen but boiling, it's 100 degrees Celsius
END
```

**Computational Pseudocode (Contoh Temperature Converter):**

```pseudocode
START TemperatureConverter
INPUT celsius_temp
SET fahrenheit = (celsius_temp × 9/5) + 32
OUTPUT fahrenheit
END
```

**Perbandingan Lengkap (Making Tea):**

| Regular Pseudocode                  | Computational Pseudocode (TeaTimer) |
|-------------------------------------|-------------------------------------|
| Boil water<br>Put tea bag in cup<br>Pour water<br>Wait 3 minutes | SET steep_time = 180<br>WHILE timer < steep_time<br>  ADD 1 to timer<br>  WAIT 1 second<br>  DISPLAY "Time left: " + (steep_time - timer)<br>END WHILE<br>DISPLAY "Tea is ready!" |

---

## 5. Contoh Algoritma

### Contoh 1: Check if an Integer is Even Number

```pseudocode
START
PRINT "Enter a number: "
READ the number from the user
IF the number divided by 2 has no remainder
    PRINT "The number is even."
ELSE
    PRINT "The number is odd."
END IF
STOP
```

### Contoh 2: Find All Even Integers in a List

```pseudocode
START
PRINT "Enter a list of integers: "
READ integers from user
even_numbers = empty list
FOR each number in integers
    IF number divided by 2 has no remainder
        ADD number to even_numbers
    END IF
END FOR
IF even_numbers is not empty
    PRINT "Even numbers:", even_numbers
ELSE
    PRINT "No even numbers found."
END IF
STOP
```

**Penjelasan tambahan singkat:**  
Contoh di atas menunjukkan bagaimana algoritma memproses input, melakukan pengecekan, dan memberikan output. Untuk input `"1 2 3 4 5"`, hasilnya adalah `Even numbers: 2, 4`.

---

## 6. Flowchart

**Definisi:**  
Represents the algorithm **visually** using shapes and arrows, helping to illustrate the flow of control and logic in a more graphical manner.

### Simbol Flowchart yang Umum

| Symbol              | Name              | Function |
|---------------------|-------------------|----------|
| Oval                | Start/End         | An oval represents a start or end point |
| Arrow →             | Arrows            | A line is a connector that shows relationships between shapes |
| Parallelogram       | Input/Output      | A parallelogram represents input or output |
| Rectangle           | Process           | A rectangle represents a process |
| Diamond             | Decision          | A diamond indicates a decision |

**Simbol Lengkap Lainnya (referensi tambahan):**
- **Terminator** → Mulai/Akhir program
- **Process** → Langkah pemrosesan
- **Decision** → Pilihan Ya/Tidak
- **Database**, **Document**, **Loop**, dll.

**Penjelasan tambahan singkat:** Flowchart sangat berguna saat menjelaskan algoritma kepada orang yang tidak paham coding.

---

## 7. Contoh Lanjutan Algoritma: Sorting & Recursion

### Sorting (Mengurutkan Data)

**Visualisasi Sorting:**

```
Unsorted Array:  [ 8 | 1 | 3 | 2 | 7 | 4 ]
                  ↓ (Sorting algorithm)
Sorted Array:    [ 1 | 2 | 3 | 4 | 7 | 8 ]
```

### Bubble Sort (Pseudocode)

```pseudocode
START BubbleSort
INPUT unsorted_list
SET n = length of unsorted_list
FOR i from 0 to n-1
    FOR j from 0 to n-i-1
        IF unsorted_list[j] > unsorted_list[j+1]
            // Swap elements
            SET temp = unsorted_list[j]
            SET unsorted_list[j] = unsorted_list[j+1]
            SET unsorted_list[j+1] = temp
        END IF
    END FOR
END FOR
OUTPUT sorted_list
STOP
```

### Recursion (Rekursi)

**Contoh Sederhana 1: Countdown Timer**

```pseudocode
START Countdown(number)
    IF number = 0
        PRINT "Blast off!"
        STOP
    PRINT number
    CALL Countdown(number - 1)
END
```

**Contoh Sederhana 2: Unwrap Gifts**

```pseudocode
START UnwrapGifts(box_count)
    IF box_count = 0
        PRINT "Found the gift!"
        STOP
    PRINT "Open box", box_count
    CALL UnwrapGifts(box_count - 1)
END
```

**Contoh Sederhana 3: Steps to Door**

```pseudocode
START ReachDoor(steps_left)
    IF steps_left = 0
        PRINT "At the door!"
        STOP
    PRINT "Take one step (", steps_left, "left)"
    CALL ReachDoor(steps_left - 1)
END
```

**Contoh Kompleks: Find All Combinations (Permutations)**

```pseudocode
START GeneratePermutations(set)
// BASE CASE
IF set is empty
    RETURN [[]]
END IF

// RECURSIVE CASE
SET first_num = REMOVE first element from set
SET remaining_set = the rest of the set

SET sub_results = CALL GeneratePermutations(remaining_set)

SET final_permutations = empty list

FOR each list IN sub_results
    FOR each index from 0 to length of list
        SET new_permutation = INSERT first_num into list at index
        ADD new_permutation TO final_permutations
    END FOR
END FOR

RETURN final_permutations
END
```

**Penjelasan tambahan singkat:** Recursion adalah fungsi yang memanggil dirinya sendiri — sangat powerful untuk masalah yang bisa dipecah menjadi sub-masalah yang sama (seperti permutasi atau countdown).
