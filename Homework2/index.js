const text = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.'

//Задание 1.
//console.log(text.length);

//Задание 2.
const result = text.replace(/;/ig, '\n');
//console.log(result);

//Задание 3.
const substring = result.replace(/\s/g,'');
//console.log(substring);

//Задание 4.
const newText = result.slice(28, 50);
//console.log(newText);

//Задание 5.
const replacedText = newText.replace('клён', 'дубе');
//console.log(replacedText);

//Задание 6.
const replacedText2 = result.toUpperCase();
//console.log(replacedText2);

//Задание 7.
const replacedText3 = result.replace(/клён/g, 'дуб');
//console.log(replacedText3);

//Задание 8.
const index = text.indexOf('моря');
//console.log(index);

//Задание 9.
const modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
//console.log(modifiedText);

//Задание 10.

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);