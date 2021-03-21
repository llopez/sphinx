# frozen_string_literal: true

module Api
  class RatesController < ActionController::API
    def index
      res = ::RestClient.get(
        ENV.fetch('CMC_API_URL'),
        {
          'X-CMC_PRO_API_KEY' => ENV.fetch('CMC_API_KEY'),
          :params => {
            symbol: 'eth,usdc,dai,wbtc,bat'
          }
        }
      )

      render json: parse_response(res.body)
    end

    private

    def parse_response(json)
      JSON
        .parse(json)
        .fetch('data')
        .map do |k, v|
          { symbol: k, value: v.dig('quote', 'USD', 'price') }
        end
    end
  end
end
