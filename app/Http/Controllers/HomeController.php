<?php

namespace App\Http\Controllers;

use App\Data\Api\CountryApi;

class HomeController extends Controller
{
  public function __construct(CountryApi $apiClient) {
    $this->apiClient = $apiClient;
  }

    public function index() {
      $res = $this->apiClient->getCountries();

      return view('app', compact( 'res'));
    }
}
