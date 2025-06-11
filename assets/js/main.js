const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "male1.png",
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "female1.png",
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "male2.png",
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "female2.png",
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "male3.png",
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "female3.png",
    },
];

const teamInfo = document.getElementById("team-info");

const printInfo = () => {
    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];
        teamInfo.innerHTML += `<div class="col">
                    <div class="card mb-3 bg-dark">
                        <div class="row g-0 style="max-width: 600px;">
                            <div class="col-4 col-md-5 col-lg-4">
                                <img
                                    src="./assets/img/${member.img}"
                                    class="img-fluid"
                                    alt="${member.name}"
                                />
                            </div>
                            <div class="col-8 col-md-7 col-lg-8">
                                <div class="card-body text-light">
                                    <h5 class="card-title">${member.name}</h5>
                                    <p class="card-text">
                                        <p>${member.role}</p>
                                        <a class="small" href="#">${member.email}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
};

printInfo();
