const footballTeam = 
    {team: "Fc Barcelona",
        year: 2010-11,
        headCoach: "Pep Guardiola",
        players: [
            {name: "Lionel Messi",
            position: "forward",
            isCaptain: false,
            },
            {name: "Xavi Hernandez",
            position: "midfielder",
            isCaptain: false,
            },
            {name: "Andres Iniesta",
            position: "midfielder",
            isCaptain: false,
            },
            {name: "Carles Puyol",
            position: "defender",
            isCaptain: true,
            },
            {name: "Sergio Busquets",
            position: "midfielder",
            isCaptain: false,
            },
            {name: "Eric Abidal",
            position: "defender",
            isCaptain: false,
            },
            {name:"David Villa",
            position: "forward",
            isCaptain: false,
            },
            {name: "Pedro Rodriguez",
            position: "forward",
            isCaptain: false,
            },
            {name: "Dani Alves",
            position: "defender",
            isCaptain: false,
            },
            {name: "Javier Mascherano",
            position: "defender",
            isCaptain: false,
            },
            {name:"Victor Valdés",
            position: "goalkeeper",
            isCaptain: false,
            },
            {name: "Pinto",
            position: "goalkeeper",
            isCaptain: false,
            },
            {name: "Maxwell",
            position: "defender",
            isCaptain: false,
            },
            {name: "Seydou Keita",
            position: "midfielder",
            isCaptain: false,
            },
            {name: "Gerad Piqué",
            position: "defender",
            isCaptain: false,
            },
            {name: "Thiago Alcantara",
            position: "midfielder",
            isCaptain: false,
            },
            
            {name: "Jonathan dos Santos",
            position: "midfielder",
            isCaptain: false,
            }
        ]
    };
    const team = document.getElementById("team");
    const year = document.getElementById("year");
    const headCoach = document.getElementById("head-coach");
    team.textContent = footballTeam.team;
    year.textContent = footballTeam.year;
    headCoach.textContent = footballTeam.headCoach;
    const positions = document.getElementById("players");
    const cardsContainer = document.getElementById("player-cards");
    players.addEventListener("change", function(event){
        const selectedPosition = event.target.value;
        filteredPlayer(selectedPosition);
    });
    const filteredPlayer = (position) => {
        let filteredPlayers = [];
        if (position === "all") {
            filteredPlayers = footballTeam.players;
        } else {
            filteredPlayers = footballTeam.players.filter(player => player.position === position);
        }
        displayPlayer(filteredPlayers);
    };
    displayPlayer(filteredPlayers);
    const displayPlayer = (players) => {
        cardsContainer.innerHTML = "";
        players.forEach(player => {
            const playerCard = document.createElement("div");
            playerCard.classList.add("player-card");
            const playerName = document.createElement("h2");
            playerName.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;
            const playerPosition = document.createElement("p");
            playerPosition.textContent = `Position: ${player.position}`;
            playerCard.appendChild(playerName);
            playerCard.appendChild(playerPosition);
            cardsContainer.appendChild(playerCard);
        }   );
    }
    


  