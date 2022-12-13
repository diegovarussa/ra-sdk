## Provide correct types
API result `"123"` (`string`) will be `123` (`number`) in the SDK

## Parse comments from achievement (TODO)
Extract data form comments to provide user tips about how to complete that achievement.

## Extra Field
Added extra fields that the API does not provide and are useful information to use.

### Achievement Class
New filed `isMissable` (`boolean`):
* Tell if this achievement can be missable searching for the string "[m]" in the title.
* `false` does not guarantee it is not missable because some people forget to insert that string in the title.