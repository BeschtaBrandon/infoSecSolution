<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');

Route::get('countries', 'Api\ApiController@getCountries');
// Route to search by country name
Route::get('countryByName/{name}', 'Api\ApiController@getCountryByName');
// Search by alpha code
Route::get('countryByCode/{code}', 'Api\ApiController@getCountryByCode');
