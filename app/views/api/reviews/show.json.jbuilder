json.review do
  json.partial! '/api/reviews/review', review: @review
end

json.guest do
  json.partial! '/api/users/user', user: @review.guest
end

