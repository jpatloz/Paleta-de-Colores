import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private miColeccion = 'alumnos';
  constructor(private firebase: AngularFirestore) { }

  //Vamos a hacer un CRUD de los alumnos

  //Leer un nuevo alumno

  getAlumno(id: string){
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  //Leer todos los alumnos
  getAll(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }

  //Nuevo alumno
  newAlumno(documendId: string, alumno: Alumno){

  }

  //Actualiza alumno
  updateAlumno(documentId: string, alumno: Alumno){

  }

  //Borra alumno
  deleteAlumno(documentId: string){

  }

}
