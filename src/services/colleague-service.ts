import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Colleague } from 'src/models/colleague';

@Injectable({
    providedIn: 'root'
})
export class ColleagueService {

    colleague: Colleague[] = [{
        score: 100,
        photo: 'https://i.pinimg.com/736x/02/df/12/02df120ca27f1b4e5109ef0f7e3e2865.jpg',
        pseudo: "Clement01",
        last: "olivier",
        first: "clement"
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

    constructor(private http: HttpClient) { }

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

    getAllColleagueFromDB(): Observable<Colleague[]> {
        return this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues');
    }

    addColleagueFromDB(colleague: Colleague): Observable<Colleague[]> {
        return this.http.post<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues', colleague);
    }

    updateColleagueFromDB(colleague: Colleague, colleagueId: number): Observable<Colleague> {
        return this.http.put<Colleague>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/'+colleagueId, colleague);
    }

    getColleagueFromDBByPseudo(colleaguePseudo: string): Observable<Colleague> {
        return this.http.get<Colleague>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/'+colleaguePseudo);
    }

    deleteVoteFromDB(colleagueId: number) {
        this.http.delete('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/' + colleagueId)
          .subscribe({
            next: data => {
              console.log('Suppression OK');
            },
            error: error => {
              console.error('Erreur :', error);
            }
          });
      }

}