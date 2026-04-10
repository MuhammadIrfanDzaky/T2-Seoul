# HTML Forms and Tables

## What is the purpose of the form?

HTML forms are required when you want to collect some data from the person who visits your website.

For example, when you register/login for applications like Netflix, you enter information like Name, Email, and Password through HTML forms.

---

## Form Element

This element wraps all the other elements that go inside of our form. This is the **form element**.

**Attributes:**

1. **Action**: The action attribute is the web address (URL) of a program that processes the information submitted by our form.
2. **Method**: It is the HTTP method that the browser uses to submit the form. The possible values are `POST` and `GET`.
   - **POST** – Data from the body of the form is sent to the server.
   - **GET** – Data is sent inside of the URL and parameters are separated with a question mark.

```html
<form action="/action.php" method="POST">
    ...
</form>
Our form won’t submit the data anywhere because it is not connected to a server.
To connect our form to a server and process our data, we can use any server-side language like Node, Python, Ruby, or PHP.

Input Element
The input element is the most commonly used form element. It is used to make a text field where the user can type some information (for example email, password, etc.).
Attributes:

Type: The type attribute indicates what kind of input we want. Example: text, email, tel, password.
ID: For targeting the input element with CSS or JS.
Name: The name attribute is necessary. When a form is submitted to the server-side code, the server can understand the form data and process the values appropriately.
Placeholder: It is a short hint which is displayed in the input field.

Example:
HTML<form action="/action.php" method="POST">
    <input type="text" id="input-name" name="name" placeholder="Your Full Name" />
    <input type="email" id="input-email" name="email" placeholder="Your Email" />
    <input type="password" id="input-password" name="password" placeholder="Your Password" />
</form>

Label Element
We can label each one of our forms controls using the label element.
The most used attribute with a label is for.
The for attribute associates the label with a particular form element.
The way it matches is by ID.
Example:
HTML<form action="/action_page.php">
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
    <input type="submit" value="Submit">
</form>
Note: When we click on the label, we automatically get the focus to the input field which is associated with the label. This is a default behaviour.

Textarea Element
Sometimes a single line of text is not enough and a simple input element won’t work. For example, some websites have a contact form for people to type their queries or messages. In these cases, it’s best to use the textarea element.
Attributes:

id and name: Same as mentioned above in input element.
cols: Specifies the visible width of a text area.
rows: Specifies the visible number of lines in a text area.

Example:
HTML<form action="/action.php" method="POST">
    <textarea
        id="form-textarea"
        name="reason"
        placeholder="Why do you want to join us?"
        cols="3"
        rows="3">
    </textarea>
</form>

Select Menus

The select element renders a drop-down menu that contains selectable options.
The select element won’t do anything by itself. This form element actually needs additional elements inside of it.
<select> element needs <option> elements inside it.

Example scenario: Our form is targeted for students who are going to seek admission at a university. We want to allow students to select from a predefined list of university programs.
Attributes:

name: Same as mentioned above in <input/> element.

Option element
The <option> element represents one of the choices that a user can choose in a select menu. The <option> element uses an attribute called value.
Value attribute:

When you submit a form to server-side code, each form element has an associated value.
For text inputs and text areas that value is whatever the user types into the field.
For predefined options, we use the value attribute to specify the values to be submitted.

Example with options:
HTML<form>
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
</form>
With optgroup (grouped options):
HTML<form>
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </optgroup>
    </select>
    <br><br>
    <input type="submit" value="Submit">
</form>
Visual example of a select menu (Favorite Color dropdown):

Red
Orange (selected)
Yellow
Green
Blue
Purple


Radio Button
If you have something like 5 or fewer options, it’s better to use radio buttons.
The difference between Select Menu and Radio Button is that radio buttons show you all the options at once.
Attributes:

name: Same as mentioned above.
value: Same as mentioned above (used when submitted).

Example:
HTML<form>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
</form>

Check Boxes
You want the user to be able to select multiple options and not just one of them. That’s where checkboxes are useful.
Attributes:

name: Same as mentioned above.
value: Same as mentioned above.
checked: By default, a checkbox input is unchecked. You can set the default state to checked by using the attribute called checked. (This is a boolean attribute.)

Example:
HTML<form>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1">I have a bike</label><br>
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    <label for="vehicle2">I have a car</label><br>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
    <label for="vehicle3">I have a boat</label>
</form>

Button Element
The button element is one of the most important form elements. Without a button you cannot submit any form to the server for processing.
The button element accepts the attribute called type. This attribute accepts three values: submit, reset and button.

Submit: to submit the form.
Reset: to clear the form.
Button: to accommodate custom behavior, like JS code.

Example (same code as label/radio example above, with submit button at the end).

Fieldset
The <fieldset> element is used to group related elements in a form. It often includes a <legend> element as a caption.
Example UI (Personalia section):

First name: [input]
Last name: [input]
Email: [input]
Birthday: [date picker]
[Submit]

Code:
HTML<form action="/action_page.php">
    <fieldset>
        <legend>Personalia:</legend>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"><br>
        <input type="submit" value="Submit">
    </fieldset>
</form>

Required Attribute
The required attribute is a boolean attribute.

When present, it specifies that an input field must be filled out before submitting the form.
Note: The required attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file.

Example:
HTML<label for="avatar">Choose a profile picture:</label>
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">

<label for="start">Start date:</label>
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">

HTML Table Elements
Basic Table Elements

table: table parent element
tr: table row, for creating row
td: table data, for showing table data
th: table header, for showing table header

Basic example:
HTML<table>
    <tr>
        <th>Nama</th>
        <th>Umur</th>
    </tr>
    <tr>
        <td>Erlanada</td>
        <td>25</td>
    </tr>
</table>
Advanced Table Elements

thead: table header, parent for table header element
tbody: table body, parent for table body element
tfoot: table footer, parent for table footer element
rowspan: combine rows
colspan: combine columns

Complete example:
HTML<table border="1">
    <thead>
        <tr>
            <th>Nama</th>
            <th>Umur</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Erlanada</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Zakaria</td>
            <td>24</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Total: 2 Orang</td>
        </tr>
    </tfoot>
</table>