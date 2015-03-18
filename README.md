# volkadserver
An IAB compliant open-source ad server for publishers

## How it works

An ad server is a server that takes input form a request, filters a collection of targeting criterias sorted by priority, and returns the first targeting criteria that matches knowledge about the request.


The most basic element of this is filtering by user agent.
A higher abstraction would be to filter by a user object, which represents information from various sources including information from a request as well as information stored server side or via third parties.

When a request comes in, all information about that user will be aggregated into UserClass object, and filtered against a collection of FilterCriterias sorted by prioritiy.

The ad server should not be responsible for determining priority. It should have filter criteria passed to it by another service and 'subscribe' to changes so that it can scale horizontally and consistently across nodes.
