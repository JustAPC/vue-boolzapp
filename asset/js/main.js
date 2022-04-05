var app = new Vue(
    {

        el: '#root',
        data: {
            profilo: {
                name: 'Sofia',
                img: '_io'
            },

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            
            indexChanged : 0,
            inputText : '',
            
        },
        created() {
               
        },

        methods: {
            changeIndexContacts: function (index) {
                this.indexChanged = index;
            },

            newMessage: function() {
                let minutes = dayjs().get('minutes');
                let hours = dayjs().get('hours');
                let newMessage = {
                    date: `${hours}:${minutes}`,
                    message: this.inputText,
                    status: 'sent'
                }

                this.contacts[this.indexChanged].messages.push(newMessage)
                this.inputText = ''
                this.reply()               
            },

            reply: function() {
                let minutes = dayjs().get('minutes');
                let hours = dayjs().get('hours');
                let botReply = {
                    date: `${hours}:${minutes}`,
                    message: 'Ok',
                    status: 'received'
                }
                setTimeout(() => {
                    this.contacts[this.indexChanged].messages.push(botReply) 
                 }, 2000);
                 console.log(botReply)
            },

            search: function() {
                let input = document.getElementById('searchbar').value
                input=input.toLowerCase();
                let x = document.getElementsByClassName('contact-name');
                let y = document.getElementsByClassName("contact-img");
                let z = document.getElementsByClassName("list-group-item")
                
                
                for (i = 0; i < x.length; i++) { 
                    if (!x[i].innerHTML.toLowerCase().includes(input)) {
                        x[i].style.display="none";
                        y[i].style.display="none";
                        z[i].style.border = 0;
                    }
                }
            }
        }
    }
    )
    // chatSelection : function () {
    //     let container = document.getElementsByClassName("chat-container")
    //     let content = document.querySelectorAll("message-list")
    //     console.log(container)
    //     if (container.classList.contains("active-chat")) {
    //         container.classList.remove("active-chat")
    //     } else {
    //         container.classList.add("active-chat");
    //         content.classList.remove("d-none");
    //         content.classList.add("d-block")
    //     }
    // },

    // getLastMessage : function (element) {
    //     let obatinedMessage = this.contacts[element].messages.length
    //     let lastMessage = this.contacts[element].messages[2].message
    //     console.log(lastMessage)
    //     return lastMessage
    // }, 