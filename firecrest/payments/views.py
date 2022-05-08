from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect


import stripe

stripe.api_key = 'sk_test_51KvkTyGFqXx6XsF5QsZ5kcd0CPbQfuiWcv2wUNVQbvIr0zKnVlR9PqmGESzOrsZoAUPiS1ncHjSkcqJRL8kN0xaw00l9I7sE1u'


class StripeCheckoutView(APIView):

    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        'price': 'price_1KwLp4GFqXx6XsF5UfYD7v8K',
                        'quantity': 1,
                    },
                ],
                mode='payment',
                success_url=settings.SITE_URL +
                '/?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.SITE_URL + '/?canceled=true',
            )

            return redirect(checkout_session.url)
        except:
            return Response(
                {'error': 'Something went wrong!'},
            )
