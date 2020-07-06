unless Rails.env.development? || Rails.env.test?
  CarrierWave.configure do |config|

    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV['AWS_ACCESS_KEY'],
      aws_secret_access_key: ENV['AWS_PRIVATE_KEY'],
      region: 'ap-northeast-1'
    }

    config.fog_directory  = 'limeapp-bucket'
    config.asset_host = 'https://limeapp-bucket.s3.amazonaws.com'
    config.cache_storage = :fog
    config.fog_provider = 'fog/aws'

  end
end
