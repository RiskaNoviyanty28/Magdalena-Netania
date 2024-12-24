var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DERMAGA_PT_50K_1 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_1 = format_DERMAGA_PT_50K_1.readFeatures(json_DERMAGA_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_1.addFeatures(features_DERMAGA_PT_50K_1);
var lyr_DERMAGA_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_1, 
                style: style_DERMAGA_PT_50K_1,
                popuplayertitle: 'DERMAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_1.png" /> DERMAGA_PT_50K'
            });
var format_DERMAGA_PT_50K_2 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_2 = format_DERMAGA_PT_50K_2.readFeatures(json_DERMAGA_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_2.addFeatures(features_DERMAGA_PT_50K_2);
var lyr_DERMAGA_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_2, 
                style: style_DERMAGA_PT_50K_2,
                popuplayertitle: 'DERMAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_2.png" /> DERMAGA_PT_50K'
            });
var format_SPOTHEIGHT_PT_50K_3 = new ol.format.GeoJSON();
var features_SPOTHEIGHT_PT_50K_3 = format_SPOTHEIGHT_PT_50K_3.readFeatures(json_SPOTHEIGHT_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPOTHEIGHT_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPOTHEIGHT_PT_50K_3.addFeatures(features_SPOTHEIGHT_PT_50K_3);
var lyr_SPOTHEIGHT_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPOTHEIGHT_PT_50K_3, 
                style: style_SPOTHEIGHT_PT_50K_3,
                popuplayertitle: 'SPOTHEIGHT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/SPOTHEIGHT_PT_50K_3.png" /> SPOTHEIGHT_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DERMAGA_PT_50K_1.setVisible(true);lyr_DERMAGA_PT_50K_2.setVisible(true);lyr_SPOTHEIGHT_PT_50K_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DERMAGA_PT_50K_1,lyr_DERMAGA_PT_50K_2,lyr_SPOTHEIGHT_PT_50K_3];
lyr_DERMAGA_PT_50K_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'FGSDRM': 'Fungsi Dermaga', 'KSTDRM': 'Konstruksi', 'OPERTR': 'Operator', 'PMLDRM': 'Pemilik Dermaga', 'STRDRM': 'Kekuatan Dermaga', });
lyr_DERMAGA_PT_50K_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'CATATAN', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'FGSDRM': 'Fungsi Dermaga', 'KSTDRM': 'Konstruksi', 'OPERTR': 'Operator', 'PMLDRM': 'Pemilik Dermaga', 'STRDRM': 'Kekuatan Dermaga', });
lyr_SPOTHEIGHT_PT_50K_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference System Identifier', 'ELEVAS': 'Ketinggian (m)', });
lyr_DERMAGA_PT_50K_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSDRM': 'ValueMap', 'KSTDRM': '', 'OPERTR': '', 'PMLDRM': '', 'STRDRM': '', });
lyr_DERMAGA_PT_50K_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'FGSDRM': 'ValueMap', 'KSTDRM': '', 'OPERTR': '', 'PMLDRM': '', 'STRDRM': '', });
lyr_SPOTHEIGHT_PT_50K_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ELEVAS': '', });
lyr_DERMAGA_PT_50K_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'FGSDRM': 'inline label - always visible', 'KSTDRM': 'inline label - always visible', 'OPERTR': 'inline label - always visible', 'PMLDRM': 'inline label - always visible', 'STRDRM': 'inline label - always visible', });
lyr_DERMAGA_PT_50K_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'FGSDRM': 'no label', 'KSTDRM': 'no label', 'OPERTR': 'no label', 'PMLDRM': 'no label', 'STRDRM': 'no label', });
lyr_SPOTHEIGHT_PT_50K_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ELEVAS': 'no label', });
lyr_SPOTHEIGHT_PT_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});