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
   * Retrieve countries
   *
   * @param \Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getCountries() {
    $response = $this->apiClient->getCountries();
    return response()->json(array_slice($response, 0, 50));
  }

  /**
   * Retrieve countries
   *
   * @param \Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function searchCountries(Request $request) {
    $name = $request->get('countryName');
    $response = $this->apiClient->postCountrySearch('Belgium');
    return response()->json($response);
  }

  public function getCountryByName() {
    $response = $this->apiClient->getCountryByName();
    return response()->json($response);
  }
}
