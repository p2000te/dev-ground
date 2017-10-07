var split = Function.prototype.call.bind( String.prototype.split, ',' );

var REST_API = Object.create({
    _: {
        indices: {},
        setIndex(HTTP_Verb) {
            var inds = this.indices;
            var i = 0;
            for( ; inds[i] != null; i++ ){  }
            this.indices[i] = HTTP_Verb;
            return i;
        }
    },
    set: function set( HTTP_Verb, CRUD_Operaton, target, responses ){
        var verb = this[HTTP_Verb] = {
            CRUD: CRUD_Operaton,

        };
    }
});

split('POST,GET,PUT,PATCH,DELETE');

    REST[ 'CRUD' ]       = split('Create,Read,Update\/Replace,Update\/Modify,Delete');


var useWith = {
    collectionUri: [ 1, 1, 0, 0, 0 ],
    itemUri:       [-1, 1, 1, 1, 1 ]
};

var responses = {
    200: 'OK',
    201: 'CREATED',
    204: 'NO CONTENT',
    400: 'BAD REQUEST',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT FOUND',
    405: 'METHOD NOT ALLOWED',
    409: 'CONFLICT',
    500: 'INTERNAL SERVER ERROR'
}



