/*
 * ImageBloom v0.1.0
 *
 * By Robiul Shagor
 * http://robiul-shagor.github.io
 *
 * Copyright (C) 2017 SoftHopper
 * MIT License
 */
(function() {
	"use strict";

    // Define Image loading default constructor
    window.imageBloom = function() {

        // Define option defaults
        var defaults = {
            blurEffect: true,
            imageSrc: 'img/default.svg'
        }

        // Create options by extending defaults with the passed in arguments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        bindFunction.call(this);
    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    // Add New class Name function
    function addNewClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    // Add Node Inset after function
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    // data bind function for binding data
    function bindFunction() {
        var elements = document.querySelectorAll('.image-bloom img');
        var getOptions = this.options;

        Array.prototype.forEach.call(elements, function(el) {
            // Get Main image source
            var src = el.getAttribute('data-thumb-url');

            // Get image data width and data height
            var fullWidth = el.getAttribute('data-full-width'),
                fullHeight = el.getAttribute('data-full-height'),
                newHeight = (fullHeight / fullWidth) * 100;

            // Created new node
            var newThumbnailDiv = document.createElement('div'),
                thumbnailImage = document.createElement('img'),
                extension = src.split('.').pop();

            // Add class for new created div
            addNewClass(newThumbnailDiv, 'bloom-thumb');

            // Set blur images parent node padding 
            el.parentNode.style.paddingBottom = newHeight + '%';

            // For Set image width and height
            thumbnailImage.width = fullWidth;
            thumbnailImage.height = fullHeight;
            newThumbnailDiv.appendChild(thumbnailImage);

            // Insert New created Div after main div
            insertAfter(el.parentNode, newThumbnailDiv);

            // Option Settings For this plug-in class name
            if (getOptions.blurEffect === true) {
                addNewClass(el.parentNode.parentNode, 'bloom-blur-loader');

            } else {
                addNewClass(el.parentNode.parentNode, 'bloom-image-loader');
                el.parentNode.parentNode.classList.remove("bloom-blur-loader")
                el.src = getOptions.imageSrc;
            }

            // If no thumbnail Found
            var newThumbnailSrc = el.getAttribute('data-thumb-url');
            if (!newThumbnailSrc) {
                newThumbnailSrc = src.replace('.' + extension, '-thumb.' + extension);
            }

            // Added image Source from data on new created image
            var newThumbnailImage = new Image;
            newThumbnailImage.src = newThumbnailSrc;
            newThumbnailImage.onload = function() {
                thumbnailImage.src = this.src;
                el.parentNode.style.paddingBottom = '0%';
                setTimeout(function() {
                    addNewClass(el.parentNode, 'bloom-thumb-loaded');
                    addNewClass(newThumbnailDiv, 'bloom-thumb-loaded');
                }, 10);
            }
            newThumbnailImage.onerror = function() {
                console.log('Sorry Images not found');
            }
        });
    }
}());