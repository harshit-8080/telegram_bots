require("dotenv").config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.token);


bot.start((ctx) => ctx.reply(`Welcome to code help, We are here to help you with DSA.`));


bot.hears('hi', (ctx) => ctx.reply(`Hey there, Which Data Structure you want to revise today ?

    Array

    Linked List

    Stack

    Queue

    Binary Tree

    Binary Search Tree

    Heap

    Hashing

    Graph

    Matrix

    Misc

    Advanced Data Structure

`));

bot.hears('array', (ctx) => ctx.reply(`

An array is a collection of items of same data type stored at contiguous memory locations. 

This makes it easier to calculate the position of each element by simply adding an offset to a base value, 
i.e., the memory location of the first element of the array (generally denoted by the name of the array). 
The base value is index 0 and the difference between the two indexes is the offset.

`))

// MORE HEARS WILL BE ADDED SOON FOR DSA TOPICS



bot.hears('bye', (ctx) => ctx.reply(`See you soon. Have a great Day !`))


bot.on('sticker' ,(ctx) => {
    return ctx.reply('😀')
})
bot.launch();