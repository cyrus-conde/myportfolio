

<x-mail::message>
FROM: {{$mailData['name']}}
Email: {{$mailData['email']}}
Message: {{$mailData['message']}}

<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
