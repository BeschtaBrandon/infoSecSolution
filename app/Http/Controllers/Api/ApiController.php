<?php
namespace App\Http\Controllers\Api;

use App\Data\Api\CountryApi;
use Illuminate\Http\Request;

class ApiController {

  /**
   * @var  App\Data\Api\CountryApi
   */
  private $apiClient;

  public function __construct(CountryApi $apiClient) {
    $this->apiClient = $apiClient;
  }

  /**
   * Retrieve all countries
   *
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getCountries() {
    $response = $this->apiClient->getCountries();
    // Limit search to 50 results
    return response()->json(array_slice($response, 0, 50));
  }

  /**
   * Retrieve a country provided country name
   *
   * @param $name - The Country's name
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getCountryByName($name) {
    $response = $this->apiClient->getCountryByName($name);
    return response()->json($response);
  }

  /**
   * Retrieve a country provided country alpha2code or alpha3code
   *
   * @param $code - The Country's alpha code
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getCountryByCode($code) {
    $response = $this->apiClient->getCountryByCode($code);
    return response()->json($response);
  }
}
