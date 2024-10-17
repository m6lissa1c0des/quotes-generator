const quotes = [{
    quote: '“You can justify anything if you do it poetically enough.”',
    writer: '― M. L. Rio , If we were villains'
},{
    quote: '“Only the very weak-minded refuse to be influenced by literature and poetry.”',
    writer: '― Cassandra Clare, Clockwork Angel'
},{
    quote: '“Per aspera ad Astra.” (Through the thorns, to the stars.) ',
    writer: '― Lucius Annaeus Seneca'
},{
    quote: '“Anything can feel like punishment if it is taught poorly.”',
    writer: '― M. L. Rio , If we were villains'
},{
    quote: '“Music expresses that which cannot be put into words and that which cannot remain silent”',
    writer: '― Victor hugo'
},{
    quote: '“You talk when you cease to be at peace with your thoughts.”',
    writer: '― Kahlil Gibran, The Prophet'
},{
    quote: '“Be kind, for everyone you meet is fighting a harder battle.”',
    writer: '― Plato'
},{
    quote: '“I am the wisest man alive, for I know one thing, and that is that I know nothing.”',
    writer: '― Plato, The Republic'
},{
    quote: '““There is nothing wrong with the love of Beauty. But Beauty - unless she is wed to something more meaningful - is always superficial.”',
    writer: '― Donna Tartt, The Secret History'
},{
    quote: '“Forgive me, for all the things I did but mostly for the ones that I did not.”',
    writer: '― Donna Tartt, The Secret History'
},{
    quote: '“It is is better to know one book intimately than a hundred superficially.”',
    writer: '― Donna Tartt, The Secret History'
},{
    quote: '“Stay away from the ones you love too much. Those are the ones who will kill you.”',
    writer: '― Donna Tartt, The Goldfinch'
},{
    quote: '“In her darkness, she is silent. In my darkness, she screams.”',
    writer: '― Colleen Hoover, November 9'
},{
    quote: '“Be comforted, dear soul! There is always light behind the clouds.”',
    writer: '― Louisa May Alcott, Little Women'
},{
    quote: '“All of the love you have given to the wrong people— it will find its way back to you.”',
    writer: '― Bianca Sparacino, The Strength In Our Scars'
},{
    quote: '“How they make you feel says a lot about them and nothing about you”',
    writer: '― Bianca Sparacino, The Strength In Our Scars'
},{
    quote: '“The fault, dear Brutus, is not in our stars, but in ourselves.”',
    writer: '― William Shakespeare, Julius Caesar'
},{
    quote: '“We know what we are, but not what we may be.”',
    
    writer: '― William Shakespeare'
}
]


const writer = document.getElementById("writer");
const btn = document.getElementById("btn")
const quote = document.getElementById("quote")
const ttl = document.getElementById("ttl");
btn.addEventListener('click' ,generate )

function generate()
{
    var random = Math.floor(Math.random() * (quotes.length));

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    
    ttl.remove();
}


// const whatsapp = document.getElementById("whatsapp");
// const instagram = document.getElementById("instagram");
// const telegram = document.getElementById("telegram");

// const pageURL = window.document.location.href
// const message = 'this is a quote generator , hope you will like it'

// const whatsappApi = 'https://wa.me/?text=${pageURL}.${message}';
// // const instagramAPI = 
// const telegramAPI = 'https://t.me/share/url?url=${pageURL}&text=${message}';

// whatsapp.addEventListener('click',whatsappclick);

// function whatsappclick()
// {
//     window.open(url = whatsappApi , target = 'blank')
// }

// // instagram.addEventListener('click',instagramclick);

// // function instagramclick()
// // {
// //     console.log('instagram a clicked')
// // }

// telegram.addEventListener('click',telegramclick);

// function telegramclick()
// {
//     window.open(url = telegramAPI , target = 'blank')
// }



