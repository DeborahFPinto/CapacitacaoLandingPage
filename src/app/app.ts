import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { Contato } from './components/contato/contato';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Sobre, Contato, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
