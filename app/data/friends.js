var profiles = [
    {
        name: "Bob",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiJnP7jyd3fAhXrilQKHUa9DU0QjRx6BAgBEAU&url=http%3A%2F%2Fbobs-burgers.wikia.com%2Fwiki%2FBob_Belcher&psig=AOvVaw2zKYSRoacIyc7xFbulE0la&ust=1547015983201826",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        name: "Homer",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi-6pTzyd3fAhWGxFQKHc8oBn4QjRx6BAgBEAU&url=http%3A%2F%2Fsimpsons.wikia.com%2Fwiki%2FFile%3AHomer_Simpson.png&psig=AOvVaw1Um1A0prwgk62LJVgtMWoO&ust=1547016013984597",
        scores: [1, 4, 3, 3, 2, 5, 4, 3, 5, 4]
    },
    {
        name: "Karl",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjw2dCByt3fAhVqrVQKHbj4AX4QjRx6BAgBEAU&url=http%3A%2F%2Fhero.wikia.com%2Fwiki%2FCarl_Brutananadilewski&psig=AOvVaw0Wkr2DrFLzpkIi0YLzVd0k&ust=1547016038074949",
        scores: [2, 2, 2, 2, 2, 2, 2, 2, 5, 5]
    },
    {
        name: "Rick",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiRtNCfyt3fAhUFw1QKHUywBEIQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRick_Sanchez_(Rick_and_Morty)&psig=AOvVaw0V_zvYyX57YmNkRiGbnCwc&ust=1547016082814659",
        scores: [3, 3, 5, 3, 3, 3, 2, 2, 5, 3]
    },
    {
        name: "Peter",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjtqsGoyt3fAhUJ7p8KHYQZC48QjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPeter_Griffin&psig=AOvVaw1c5ccaaFIuxyKd3clm_abC&ust=1547016128577653",
        scores: [1, 4, 4, 4, 3, 1, 3, 2, 3, 4]
    },
    {
        name: "Marge",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjjuMSzyt3fAhVDlVQKHfbnC0UQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMarge_Simpson&psig=AOvVaw2kfbrgfe0TNJOjoPPt_-eU&ust=1547016145062703",
        scores: [5, 5, 5, 5, 5, 5, 5, 4, 3, 4]
    },
    {
        name: "Lois",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiBw9C9yt3fAhWEMXwKHU2CD3gQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLois_Griffin&psig=AOvVaw3kWUmxtnQaIk-QNivUI3dF&ust=1547016169480737",
        scores: [4, 2, 4, 3, 3, 3, 4, 5, 5, 5]
    },
    {
        name: "Katya",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjNn67dyt3fAhWH_p8KHf0pDF8QjRx6BAgBEAU&url=http%3A%2F%2Farcher.wikia.com%2Fwiki%2FFile%3AC--fakepath-Katya_(1).png&psig=AOvVaw3CBClif2UdcWsgfGUX78Ta&ust=1547016210440566",
        scores: [2, 4, 3, 1, 3, 1, 3, 4, 5, 5]
    },
    {
        name: "Sterling",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjZt5zmyt3fAhWJrFQKHcfDDSQQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSterling_Archer&psig=AOvVaw3y1u2ekvQEFEvCPK18dfpa&ust=1547016257824488",
        scores: [1, 3, 2, 4, 3, 5, 4, 2, 4, 1]
    },
    {
        name: "Lana",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjBk5Dyyt3fAhWqslQKHRkjB3sQjRx6BAgBEAU&url=http%3A%2F%2Farcher.wikia.com%2Fwiki%2FLana_Kane&psig=AOvVaw1PJu2JYAaPIIJIcxAvufpM&ust=1547016276159950",
        scores: [2, 4, 2, 4, 2, 3, 3, 4, 5, 3]
    },
    {
        name: "Linda",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi839qMy93fAhUFBHwKHVToAT8QjRx6BAgBEAU&url=http%3A%2F%2Fbobs-burgers.wikia.com%2Fwiki%2FLinda_Belcher&psig=AOvVaw0r1j3-BgCa8eT0BUoRCPFX&ust=1547016328497435",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 4]
    },
    {
        name: "Pam",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwib6eeTy93fAhWp5lQKHVCpCTcQjRx6BAgBEAU&url=http%3A%2F%2Farcher.wikia.com%2Fwiki%2FFile%3APamela_Poovey.png&psig=AOvVaw38q60xhWI4xwrnkluGl1XJ&ust=1547016352050351",
        scores: [1, 1, 1, 1, 2, 3, 4, 5, 4, 3]
    },
    {
        name: "Cheryl",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi0nYacy93fAhWF458KHc2XDJwQjRx6BAgBEAU&url=http%3A%2F%2Farcher.wikia.com%2Fwiki%2FCheryl_Tunt&psig=AOvVaw2zRX7rEKLsRfzmNTd0tH_D&ust=1547016370506386",
        scores: [5, 5, 4, 3, 5, 2, 4, 3, 2, 1]
    }
]

module.exports = profiles;