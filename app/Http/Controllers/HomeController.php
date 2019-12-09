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
      $regions = array_column($res, 'region');
      $regions = array_values(array_unique($regions, SORT_REGULAR));
      $filteredRegions = array_filter($regions, function($value) { return !is_null($value) && $value !== ''; });

      $count = count($res);
      return view('app', compact( 'count', 'filteredRegions'));
    }

  private function getRegions($array)
  {
    if($array%2==0)
      return TRUE;
    else
      return FALSE;
  }
}
