<?php

namespace App\Data\Api;

use App\Data\Api\Base\BaseApi;
use Guzzle\Http\Client;

class CountryApi extends BaseApi {

  const ALL_COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';

  const SEARCH_BY_NAME_API = 'https://restcountries.eu/rest/v2/name/';

  public function __construct() {
    //$this->api_base = 'https://restcountries.eu/rest/v2/name/united';
    $this->api_base = self::ALL_COUNTRIES_API;
  }

  /**
   * Return list of countries
   *
   * @return mixed
   */
  public function getCountries() {
   return $this->getRequest($this->api_base);
  }

}
