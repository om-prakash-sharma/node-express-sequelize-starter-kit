/**
 * Created by OmPrakashSharma on 19-06-2019.
 */

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('vw_project_list', {
            ID: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            project_name: DataTypes.STRING,
            BUDGET: DataTypes.STRING,
            TOTAL_COST: DataTypes.STRING,
            TOTAL_TIME: DataTypes.STRING,
            ESTIMATED_TIME: DataTypes.STRING,
            EMP_COUNT: DataTypes.STRING,
            EMP_NAMES: DataTypes.STRING,
            START_DATE: DataTypes.DATE,
            END_DATE: DataTypes.DATE,
            CREATED_DATE: DataTypes.DATE,
        },
        {
            freezeTableName: true,
            timestamps: false,
        });
    return Project;
}