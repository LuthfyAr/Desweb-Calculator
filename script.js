const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


//Mendefinisikan fungsi untuk menghitung button yang dikilik
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        //Jika outputnya  '%', ganti dengan '/100' sebelum evaluasi.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        //iIka DEL button diklik, hapus karakter terakhir di outputnya 
        output = output.toString().slice(0, -1);
    } else {
        //Jika outputnya kosong dan buttonya spesial karakter maka akan mereturn
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//Menambahkan event listener ke buttons, untuk menjalankan call calculate() saat di click.
buttons.forEach((button) => {
    //Button click listener calls calculate() dengan dataset value sebagai argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});