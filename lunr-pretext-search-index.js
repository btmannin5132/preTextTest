var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "normExplain",
  "level": "1",
  "url": "normExplain.html",
  "type": "Chapter",
  "number": "2",
  "title": "norm() Explaination",
  "body": " norm() Explaination   Text before the first section.   In your knn_single_prediction function for task 1, you are asked to use the np.linalg.norm(). I have received quite a few questions about what this is doing, and how to properly use it in the program, so I will go over that here.  As the instructions state, you are trying to calculate the ‘distance’ away your new_example input is from all of the test data.  You may recall from a prior math or physics class where you calcualted distance between two points using a “distance formula” that likely looked something like :  if (x1,y1) is (0,0), you may be able to recognize this as solving for the hypotenuse of a right triangle using the Pythagorean theorem.  In calc2 and later physics classes, you will use a similar function to determine the magnitude of vectors.  In Calc3, you will learn you can use this same thing for finding the distance between two points in 3 dimensions too (and as many as you may want):  Per the original function name, this process is called normalization. ‘normalizing’ values calculated the magnitude of the values provided. You can provide 2 values, 3 values, even dozens of values if you wanted to, and the function will add up the square of all of the values, and then take the square root to provide a normalized value.  Numpy arrays make this go very quickly, as they have a normalization function already. You can replicate this using standard numpy operations too.   An interactive Python program, using Runestone   import numpy as np # test points. Feel free to test out multiple sets p1 = np.array([1,5]) p2 = np.array([3,6]) #simmilar to what you would get from your csv file #p1 = np.array([77.5901, 74.89, 87.53, 76.63, 16.03, 17.25, 0, 0]) #p2 = np.array([42.2627, 68.19, 101.12, 90.50, 112.23, 107.99, 25, 1]) # take the differences of the array d1 = p2- p1 norm= np.linalg.norm(d1) dist= np.sqrt(sum(d1**2)) print(dist) print(norm)    "
},
{
  "id": "program-activecode-python",
  "level": "2",
  "url": "normExplain.html#program-activecode-python",
  "type": "Listing",
  "number": "2.0.1",
  "title": "An interactive Python program, using <span class=\"booktitle\">Runestone<\/span>",
  "body": " An interactive Python program, using Runestone   import numpy as np # test points. Feel free to test out multiple sets p1 = np.array([1,5]) p2 = np.array([3,6]) #simmilar to what you would get from your csv file #p1 = np.array([77.5901, 74.89, 87.53, 76.63, 16.03, 17.25, 0, 0]) #p2 = np.array([42.2627, 68.19, 101.12, 90.50, 112.23, 107.99, 25, 1]) # take the differences of the array d1 = p2- p1 norm= np.linalg.norm(d1) dist= np.sqrt(sum(d1**2)) print(dist) print(norm)   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
