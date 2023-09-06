import { Injectable } from '@angular/core';
import { Colleague } from 'src/models/colleague';

@Injectable({
    providedIn: 'root'
})
export class ColleagueService {

    colleague: Colleague[] = [{
        score: 100,
        photo: 'https://i.pinimg.com/736x/02/df/12/02df120ca27f1b4e5109ef0f7e3e2865.jpg',
        pseudo: "Clement"
    },
    {
        score: 200,
        photo: 'https://img.filmsactu.net/datas/films/j/u/jugatsu/xl/46f883446715e.jpg',
        pseudo: "Toto"
    },
    {
        score: -400,
        photo: 'https://th.bing.com/th/id/OIP.9-gIa5BQbfUX7D6-fRle2gHaHa?pid=ImgDet&rs=1',
        pseudo: "Kelyan"
    },
    {
        score: 900,
        photo: 'https://th.bing.com/th/id/R.e28117092992abc8802d4f1bfcab32c4?rik=CFFeF7UQxrEAqA&pid=ImgRaw&r=0',
        pseudo: "Alexis"
    },
    {
        score: 100,
        photo: 'https://i.pinimg.com/originals/be/f3/61/bef361fb27482f4e5dd1c2f56f1730a4.jpg',
        pseudo: "Ryan"
    },
    {
        score: -300,
        photo: 'https://th.bing.com/th/id/R.81f2cb757786313dfd552fe4e4558a1c?rik=S1PCtCN3FkA9LA&pid=ImgRaw&r=0',
        pseudo: "Guillaume"
    },
    {
        score: -100,
        photo: 'https://m.media-amazon.com/images/M/MV5BMGJkZmVlYjUtN2FhYS00Y2UyLWIxMjAtYTU3OWExMmUyZjBmXkEyXkFqcGdeQXVyNTM2NTY4NzU@._V1_.jpg',
        pseudo: "Mattéo"
    },
    {
        score: 700,
        photo: 'https://m.media-amazon.com/images/I/51D77G8AGBL.__AC_SX300_SY300_QL70_ML2_.jpg',
        pseudo: "Ruben"
    }
    ];

    constructor() { }

    refresh() {
        this.colleague = [{
            score: 100,
            photo: 'https://i.pinimg.com/736x/02/df/12/02df120ca27f1b4e5109ef0f7e3e2865.jpg',
            pseudo: "Clement"
        },
        {
            score: 200,
            photo: 'https://img.filmsactu.net/datas/films/j/u/jugatsu/xl/46f883446715e.jpg',
            pseudo: "Toto"
        },
        {
            score: -400,
            photo: 'https://th.bing.com/th/id/OIP.9-gIa5BQbfUX7D6-fRle2gHaHa?pid=ImgDet&rs=1',
            pseudo: "Kelyan"
        },
        {
            score: 900,
            photo: 'https://th.bing.com/th/id/R.e28117092992abc8802d4f1bfcab32c4?rik=CFFeF7UQxrEAqA&pid=ImgRaw&r=0',
            pseudo: "Alexis"
        },
        {
            score: 100,
            photo: 'https://i.pinimg.com/originals/be/f3/61/bef361fb27482f4e5dd1c2f56f1730a4.jpg',
            pseudo: "Ryan"
        },
        {
            score: -300,
            photo: 'https://th.bing.com/th/id/R.81f2cb757786313dfd552fe4e4558a1c?rik=S1PCtCN3FkA9LA&pid=ImgRaw&r=0',
            pseudo: "Guillaume"
        },
        {
            score: -100,
            photo: 'https://m.media-amazon.com/images/M/MV5BMGJkZmVlYjUtN2FhYS00Y2UyLWIxMjAtYTU3OWExMmUyZjBmXkEyXkFqcGdeQXVyNTM2NTY4NzU@._V1_.jpg',
            pseudo: "Mattéo"
        },
        {
            score: 700,
            photo: 'https://m.media-amazon.com/images/I/51D77G8AGBL.__AC_SX300_SY300_QL70_ML2_.jpg',
            pseudo: "Ruben"
        }
        ];
    }

    ajouter(colleague: Colleague) {
        this.colleague.push(colleague);
    }

    delete(colleague: Colleague) {
        const index: number = this.colleague.indexOf(colleague);
        if (index !== -1) {
            this.colleague.splice(index, 1);
        }
    }

}