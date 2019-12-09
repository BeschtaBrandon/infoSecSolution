<?php

namespace App\Data\Api;

use App\Data\Api\Base\BaseApi;
use Guzzle\Http\Client;

class CountryApi extends BaseApi {

  const COUNTRIES_API = 'https://restcountries.eu/rest/v2/';

  const SEARCH_BY_NAME_API = 'https://restcountries.eu/rest/v2/name/';

  public function __construct() {
    $this->api_base = self::COUNTRIES_API;
  }

  /**
   * Return list of countries
   *
   * @return mixed
   */
  public function getCountries() {
   return $this->getRequest($this->api_base . 'all');
  }

  public function postCountrySearch($name) {
    $method = $this->api_base . 'name';

    $data = [
      'name' => $name
    ];

    return $this->postRequest($method, $data);
  }

  public function getCountryByName($name = '') {
    return $this->getRequest($this->api_base . 'name/' . $name);
  }

  public function getCountryByCode($code = '') {
    return $this->getRequest($this->api_base . 'alpha/' . $code);
  }

}
