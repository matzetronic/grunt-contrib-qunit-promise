
define(["qunitjs"], function(QUnit) {
	"use strict";
	
	return function() {
		function fn(i) {
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					if (i === 0) {
						resolve({ foo: "bar" });
					} else {
						reject(new Error("Rejected"));
					}
				}, 500);
			});
		}

		QUnit.test("Promise", function(assert) {
			assert.expect(1);

			var done = assert.async();
			var promise = fn(0);

			promise
				.then(function(data) {
					assert.deepEqual({ foo: "bar" }, data, "Resolved");
					done();
				})
				.catch(function() {
					assert.ok(false, "Rejected");
					done();
				});
		});

		QUnit.test("Return promise", function(assert) {
			assert.expect(0);
			return fn(0);
		});
	};
});
