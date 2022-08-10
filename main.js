let btn = document.getElementById('btn');
let output = document.getElementById('output');
let affirmations =[
    'I love and approve of myself.',
    'I am a work in progress.',
    'I will watch while my life unfolds perfectly for me.',
    'When I am feeling depressed,<br>I show myself kindness and forgiveness.',
    'This, too, will pass.',
    'I forgive myself for any pain I have caused others.',
    'I don\'t let the past dictate my future.',
    'I am healing.',
    'I can decide how much or how little I want to do each day.',
    'The universe wants what\'s best for me.',
    'I am not selfish because I do what I need to do to feel better.',
    'I trust myself to make the right decisions.',
    'I am worthy.',
    'I don\'t need to be productive to see value in myself.',
    'I don\'t need to be perfect. I can make mistakes.',
    'Smile and breathe.',
    'All is good in my world,<br>and everything is working out for the best.',
    'The present moment is where the power is.',
    'I have faith in myself.',
    'My past has helped me to become the person I am today.',
    'You\'re the shit!',
    'Just get to it, it won\'t take too long.',
    'Do you want to be great or not?',
    'I alone hold the truth of who I am.',
    'I am growing and I am at my own pace.',
    'I breathe in healing,<br>I exhale the painful things that burden my heart.',
    'I can hold two opposing feelings at once,<br>it means I am processing.',
    'I hold community for others,<br>and am held in community by others.',
    'I nourish myself with kind words.',
    'Asking for help is a sign of self-respect and self-awareness.',
    'I am allowed to ask for what I want and what I need.',
    'I am held and supported by those who love me.',
    'I am in charge of how I feel and I choose to feel happy.',
    'I am open to healing.',
    'I am optimistic because today is a new day.',
    'I am safe and surrounded by love and support.',
    'I am still learning so it\'s okay to make mistakes.',
    'I am valued and helpful.',
    'I am worthy of investing in myself.',
    'I belong here, and I deserve to take up space.',
    'I can be soft in my heart and firm in my boundaries.',
    'I celebrate the good qualities in others and myself.',
    'I do not have to linger in dark places;<br>there is help for me here.',
    'I embrace change seamlessly<br>and rise to the new opportunity it presents.',
    'I have come farther than I would have ever thought possible, and I\'m learning along the way.',
    'I look forward to tomorrow and the opportunities that await me.',
    'I make time to experience grief and sadness when necessary.',
    'I release the fears that do not serve me.',
    'I strive for joy, not for perfection.',
    'Letting go creates space for opportunities to come.',
    'My heart is open to helpfulness from myself and from others.',
    'My life is not a race or competition.',
    'My perspective is unique and important.',
    'Saying “no” is an act of self-affirmation, too.',
    'Sometimes the work is resting.',
    'There is growth in stillness.',
    'When I forgive myself, I free myself.',
    'When I speak my needs, I receive them abundantly.',
    'I am inspiring people through my work.',
    'I am not defined my by past;<br>I am driven by my future.',
    'I do not waste away a single day of my life. I squeeze every ounce of value out of each of my days on this planet—today, tomorrow, and everyday.',
    'I\’ve made it through hard times before, and I\’ve come out stronger and better because of them. I\’m going to make it through this.',
    'I belong in this world;<br>there are people that care about me and my worth.',
    'Note to future-self: I am going to make you so proud.',
];

let uniqueAffirmations = [];
affirmations.forEach((c) => {
    if (!uniqueAffirmations.includes(c)) {
        uniqueAffirmations.push(c);
    }
});

function randNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
        if (copy.length < 1) { copy = array.slice(0); }
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index,1);
        return item;
    };
}

var randomChooser = randNoRepeats(uniqueAffirmations);

btn.addEventListener('click', function(){
    var randomAffirmation = randomChooser()
    output.innerHTML = randomAffirmation;
})