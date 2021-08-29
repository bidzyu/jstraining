const convert = (num, base) => {
    switch(base) {
        case 36:
            return num.toString(36);
            break;
        case 32:
            return num.toString(32);
            break;
        case '0x': //шестнадцатеричная
        case 16:
            return num.toString(16);
            break;
        case '0o': //восьмеричная
        case 8:
            return num.toString(8);
            break;
        case '0b': //бинарная
        case 2:
            return num.toString(2);
            break;
    }
}