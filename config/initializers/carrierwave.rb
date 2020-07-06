# 下記の三行は入れていた方がいいらしい
require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

if Rails.env.production?
  CarrierWave.configure do |config|
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      # Amazon S3用の設定
      provider: 'AWS',
      region: ENV['AWS_S3_REGION'],
      aws_access_key_id: ENV['AWS_ACCESS_KEY'],
      aws_secret_access_key: ENV['AWS_PRIVATE_KEY'],
    }
    config.fog_directory     =  'limeapp-bucket'
    config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
  end

  # 日本語ファイル名の設定
  CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
end
