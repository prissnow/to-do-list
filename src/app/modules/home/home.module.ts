import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    InputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
