
/* module: 32 er 5 */
// map()

/* module: 32 er 6 */
// 1.filter() array potiti upadaner moddhe jeta jeta shorto pulfil korbe taderke notun ekta array te rekhe setake ritan kore.
// find() array moddhe element er sob gulo ke dibe
ud: const products = [
    {name: 'computer', price: 20000, color: 'black'},
    {name: 'mobile', price: 15000, color: 'silver'},
    {name: 'microphone', price: 1000, color: 'black'},
    {name: 'book', price: 50, color: 'red'},
    {name: 'pen', price: 10, color: 'yellow'},
]
const expensive = products.filter(product => product.price < 100);
const expensive = products.filter(product => product.price > 100);
// 2.find() array er prothom je upadan shorto pulfil korbe shudhu se upadanke ritan kore.
// find() sora sori element er prothom ta ke dibe
ud:const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);

/* module: 32 er 7 */
// জাভাস্ক্রিপ্ট ক্লাস হল জাভাস্ক্রিপ্ট অবজেক্টের টেমপ্লেট।
// 1.class = ekoi dhorner onek gulo object toiri korar jonno class bebohar kora hoy.
// 2. class er vitor object er popari gulo ekses korar jonno this use kora hoy 
