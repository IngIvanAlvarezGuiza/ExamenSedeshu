<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'LogueoController@index');

Route::get('/home', 'IndexController@index');



//Rutas que generan las operaciones para CRUD
Route::resource('usuario','UsuarioController');

Route::get('usuarios/obtenerUltimoID','UsuarioController@obtenerUltimoID');
Route::get('/mapas','MapasController@index');